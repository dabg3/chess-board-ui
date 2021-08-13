import { Component, OnInit } from '@angular/core';
import { Mapping } from './square-mapping/mapping';
import { SquareMappingService } from './square-mapping/square-mapping.service';
import { Square } from './square-mapping/square';
import { PositionService } from './position/position.service';
import { Piece } from './position/piece';
import { Side } from './side';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

	squareSizePx: number = 100;

	squares: Square[];

	constructor(
		private _mappingService: SquareMappingService,
		private _pieceService: PositionService) {
	}

	ngOnInit(): void {
		//BER_LEF for white
		this.squares = this._mappingService.sortSquares(Mapping.LER_BEF);
		for (const square of this.squares) {
			const piece: {type: Piece, side: Side} | undefined = this._pieceService.getPieceOn(square.name);
			if (piece) {
				square.piece = piece;
			}
		}
	}

	onSquareClick(square: Square) {
		console.log(square.name, square.piece);
	}

}
