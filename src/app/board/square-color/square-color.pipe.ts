import { Pipe, PipeTransform } from '@angular/core';
import { Square } from '../square-mapping/square';

@Pipe({
	name: 'squareColor'
})
export class SquareColorPipe implements PipeTransform {

	transform(value: Square, ...args: unknown[]): string {
		return this.isSquareWhite(value.rank, value.file) ? "white" : "black";
	}

	private isSquareWhite(rank: number, file: number): boolean {
		const rankAndFileEven: boolean = rank % 2 == 0 && file % 2 == 0;
		const rankAndFileOdd: boolean = rank % 2 == 1 && file % 2 == 1;
		return rankAndFileEven || rankAndFileOdd;
	}

}
