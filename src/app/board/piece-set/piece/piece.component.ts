import { Component, Input, OnInit } from '@angular/core';
import { Square } from '../../square-mapping/square';

@Component({
	selector: 'svg-image[appPiece]',
	templateUrl: './piece.component.html',
	styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

	@Input('squareSizePx') sqPx: number;
	@Input('square') square: Square;

	constructor() { }

	ngOnInit(): void {
	}

}
