import { AfterContentChecked, Directive, ElementRef, Inject, Input } from '@angular/core';
import { Image, SVG } from '@svgdotjs/svg.js';
import { DEFAULT_IMAGE_PROVIDER } from './default-image-provider.service';
import { Piece } from './piece';
import { PieceImageService } from './piece-image-service';
import { Side } from './side';

@Directive({
	selector: '[appPiece]'
})
export class PieceDirective implements AfterContentChecked {

	private _svgImage: Image;
	@Input('appPiece')
	piece: {type: Piece, side: Side};

	constructor(
		el: ElementRef,
		@Inject(DEFAULT_IMAGE_PROVIDER) private _pieceImageService: PieceImageService) {

		const svgElement = SVG(el.nativeElement);
		if (svgElement instanceof Image) {
			this._svgImage = svgElement;
		} else {
			throw new Error(svgElement + " not SVG.Image");
		}
	}

	ngAfterContentChecked(): void {
		const imagePath: string = this._pieceImageService.locateImage(this.piece);
		this._svgImage.attr("href", imagePath);
	}


}
