import { Mapping } from './mapping';
import { Square } from './square';

export class SquareMappingService {

	private referenceSquares: Square[] = ReferenceSquaresGenerator.generate();

	constructor() { }

	public sortSquares(mapping: Mapping): Square[] {

		const sortedSqs: Square[] = new Array<Square>(64);

		for (const square of this.referenceSquares) {
			sortedSqs[this.calculateSquareIndex(square, mapping)] = new Square(
				square.name,
				mapping.rankIndexes[square.rank],
				mapping.fileIndexes[square.file]);
		}

		return sortedSqs;
	}

	private calculateSquareIndex(square: Square, mapping: Mapping): number {
		const rankIndex = mapping.rankIndexes[square.rank];
		const fileIndex = mapping.fileIndexes[square.file];
		return mapping.ordering!(rankIndex, fileIndex);
	}
}

class ReferenceSquaresGenerator {

	static generate(): Square[] {
		const refSquares: Square[] = new Array<Square>();

		for (let file = 0; file < 8; file++) {
			const squareLetter: string = this.retrieveFileLetter(file);
			for (let rank = 0; rank < 8; rank++) {
				const squareName: string = squareLetter + (rank + 1);
				refSquares.push(new Square(squareName, rank, file));
			}
		}

		return refSquares;
	}

	private static retrieveFileLetter(file: number): string {
		return String.fromCharCode('A'.charCodeAt(0) + file);
	}

}
