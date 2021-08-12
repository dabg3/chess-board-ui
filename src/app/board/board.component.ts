import { Component, OnInit } from '@angular/core';
import { Square } from './square-mapping/square';
import { SquareMappingService } from './square-mapping/square-mapping.service';

@Component({
	selector: 'app-board',
	templateUrl: './board.component.html',
	styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

	constructor(private _mappingService: SquareMappingService) { }

	squares: IterableIterator<Square>;

	ngOnInit(): void {
		this.squares = this._mappingService.sortSquares();
	}

	retrieveColor(square: Square) : string{
		return this.isSquareWhite(square.naturalIndexes.rank - 1, square.naturalIndexes.file - 1) ?
			"white" : "black";
	}

	private isSquareWhite(rank: number, file: number): boolean {
		const rankAndFileEven: boolean = rank % 2 == 0 && file % 2 == 0;
		const rankAndFileOdd: boolean = rank % 2 == 1 && file % 2 == 1;
		return rankAndFileEven || rankAndFileOdd;
	}

	onSquareClick(square: Square, squareSvg?: any) {
		console.log(square);	
	}

}
