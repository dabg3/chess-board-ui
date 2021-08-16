import { Component, OnInit } from '@angular/core';
import { Piece } from './position/piece';
import { PositionService } from './position/position.service';
import { Side } from './side';
import { Mapping } from './square-mapping/mapping';
import { Square } from './square-mapping/square';
import { SquareMappingService } from './square-mapping/square-mapping.service';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {


	squareSizePx: number = 100;

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

	onSquareClick(square: Square): void {
		if (this.isNewMove() && square.piece) {
			this.move = { from: square }
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
