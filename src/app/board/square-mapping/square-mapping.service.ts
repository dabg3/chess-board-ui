import { Mapping } from './mapping';
import { Square } from './square';

export class SquareMappingService {

	constructor() { }

	public sortSquares(mapping: Mapping): Square[] {

		const sortedSqs: Square[] = new Array(64);

		const refSquares: Square[] = ReferenceSquaresGenerator.generate();
		for (const square of refSquares) {
			sortedSqs[this.calculateSquareIndex(square, mapping)] = new Square(
				square.toString(),
				mapping.rankIndexes[square.rank],
				mapping.fileIndexes[square.file]
			)
		}

		return sortedSqs;
	}

	private calculateSquareIndex(square: Square, mapping: Mapping): number {
		const fileIndex = square.file;
		const rankIndex = square.rank;
		return mapping.ordering!(rankIndex, fileIndex);
	}
}

class ReferenceSquaresGenerator {

	static generate(): Square[] {
		const refSquares: Square[] = new Array<Square>();

		for(let file = 0; file < 8; file++) {
			for(let rank = 0; rank < 8; rank++) {
				const squareName = this.retrieveFileLetter(file) + (rank + 1);
				console.log(squareName, rank, file);
				refSquares.push(new Square(squareName, rank, file));
			}
		}
		console.log(refSquares.length)
		return refSquares;
	}

	private static retrieveFileLetter(file: number): string {
		return String.fromCharCode('A'.charCodeAt(0) + file);
	}

}
