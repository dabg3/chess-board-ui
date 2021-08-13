import { Component, Input, OnInit } from '@angular/core';
import { Square } from '../../square-mapping/square';

@Component({
	selector: 'svg-image[app-piece]',
	template: `
		<svg-image imageUrl="../../../../assets/Chess_bdt45.svg" [x]='sqPx' [y]='sqPx'>
		</svg-image>
		`,
	styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

	
	@Input('square') square: Square;
	@Input('squareSizePx') sqPx: number;

	constructor() { }

	ngOnInit(): void {
	}

}
