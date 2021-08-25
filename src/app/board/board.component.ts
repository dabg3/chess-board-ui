import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { SVG, Svg, Rect, List, Element } from '@svgdotjs/svg.js';
import { Piece } from './position/piece';
import { PositionService } from './position/position.service';
import { Side } from './position/side';
import { SquareColorPipe } from './square-color/square-color.pipe';
import { Mapping } from './square-mapping/mapping';
import { Square } from './square-mapping/square';
import { SquareMappingService } from './square-mapping/square-mapping.service';


@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, AfterViewInit, AfterViewChecked {


	private _svgContainer: Element;

	squares: Square[];

	private move: {
		from: Square;
		to?: Square;
	}

	constructor(
		private _mappingService: SquareMappingService,
		private _positionService: PositionService) {
	}

	ngOnInit(): void {
		//BER_LEF for white view
		this.squares = this._mappingService.sortSquares(Mapping.BER_LEF);
		for (const square of this.squares) {
			const piece: { type: Piece, side: Side } | undefined = this._positionService.getPieceOn(square.name);
			if (piece) {
				square.piece = piece;
			}
		}
	}

	ngAfterViewInit(): void {
		this._svgContainer = SVG("svg");
		const svgSquares: List<Element> = this._svgContainer.find(".square");
		const svgPieces: List<Element> = this._svgContainer.find(".piece");
		const squareColorPipe: SquareColorPipe = new SquareColorPipe();

		let sqIndex = 0;
		let pieceIndex = 0;
		for (let svgSq of svgSquares) {
			const square = this.squares[sqIndex++];
			const x = 12.5 * square.file + '%';
			const y = 12.5 * square.rank + '%'
			svgSq.move(x, y)
				.fill(squareColorPipe.transform(square))
			if (square.piece) {
				svgPieces[pieceIndex++].move(x, y);
			}
		}
	}

	ngAfterViewChecked(): void {
		const svgPieces: List<Element> = this._svgContainer.find(".piece");

		let pieceIndex = 0;
		for (let square of this.squares) {
			if (!square.piece) {
				continue;
			}
			const x = 12.5 * square.file + '%';
			const y = 12.5 * square.rank + '%'
			svgPieces[pieceIndex++].move(x, y);
		}
	}

	onSquareClick(square: Square): void {
		console.log(square);

		if (this.isNewMove()) {
			if (square.piece) {
				this.move = { from: square }
			}
			return;
		}
		if (this.move.from == square) {
			return;
		}
		this.move.to = square;

		this.move.to.piece = this.move.from.piece;
		this.move.from.piece = undefined;
	}

	private isNewMove(): boolean {
		return !this.move || (this.move.from != null && this.move.to != null);
	}

}