import { Component, Input, OnInit } from '@angular/core';
import { Square } from '../../square-mapping/square';

@Component({
	selector: 'app-piece',
	templateUrl: './piece.component.html',
	styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {

	@Input('square') square: Square;
	@Input('squareSizePx') squareSizePx: number;

	constructor() { }

	ngOnInit(): void {
	}

}
