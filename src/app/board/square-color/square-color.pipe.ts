import { Pipe, PipeTransform } from '@angular/core';
import { Square } from '../square-mapping/square';

@Pipe({
	name: 'squareColor'
})
export class SquareColorPipe implements PipeTransform {

	transform(value: Square, ...args: unknown[]): string {
		return this.isSquareWhite(value.rank, value.file) ? "#ffffdd" : "#86a666";
	}

	private isSquareWhite(rank: number, file: number): boolean {
		return rank % 2 == file % 2;
	}

}
