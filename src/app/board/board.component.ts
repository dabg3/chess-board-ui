import { Component, OnInit } from '@angular/core';
import { Mapping } from './square-mapping/mapping';
import { Square } from './square-mapping/square';
import { SquareMappingService } from './square-mapping/square-mapping.service';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

	squares: {
		name: string;
		file: number;
		rank: number;
	}[];

	constructor(private _mappingService: SquareMappingService) {
		this.squares = this._mappingService.sortSquares(Mapping.LER_BEF);
	}

	ngOnInit(): void {
	}

	retrieveColor(rank: number, file: number): string {
		return this.isSquareWhite(rank, file) ? "white" : "black";
	}

	private isSquareWhite(rank: number, file: number): boolean {
		const rankAndFileEven: boolean = rank % 2 == 0 && file % 2 == 0;
		const rankAndFileOdd: boolean = rank % 2 == 1 && file % 2 == 1;
		return rankAndFileEven || rankAndFileOdd;
	}

	onSquareClick(squareName: string, squareSvg?: any) {
		console.log(squareName);
	}

}
