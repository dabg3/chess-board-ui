import { Mapping } from './mapping';
import { Square } from './square';

export class SquareMappingService {

	constructor() { }

	public sortSquares(mapping: Mapping): { name: string, rank: number, file: number }[] {
		const sortedSqs: { name: string, rank: number, file: number }[] = new Array(64);

		const squares: IterableIterator<Square> = Square.getAll();
		for (const square of squares) {
			sortedSqs[this.calculateSquareIndex(square, mapping)] = {
				name: square.toString(),
				rank: mapping.rankIndexes[square.naturalIndexes.rank - 1],
				file: mapping.fileIndexes[square.naturalIndexes.file - 1]
			}
		}

		return sortedSqs;
	}

	private calculateSquareIndex(square: Square, mapping: Mapping): number {
		const fileIndex = square.naturalIndexes.file - 1;
		const rankIndex = square.naturalIndexes.rank - 1;
		return mapping.ordering!(rankIndex, fileIndex);
	}
}
