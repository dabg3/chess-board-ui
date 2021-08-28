export class Mapping {
	
	// Little Endian ranks, Big Endian files
	static readonly BLACK_VIEW = new Mapping([0, 1, 2, 3, 4, 5, 6, 7], [7, 6, 5, 4, 3, 2, 1, 0]);
	// Big Endian ranks, Little Endian files
	static readonly WHITE_VIEW = new Mapping([7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7]);

	private constructor(
		readonly rankIndexes: number[],
		readonly fileIndexes: number[],
		readonly ordering?: (rank: number, file: number) => number) {

		if (!ordering) {
			this.ordering = (rank, file) => 8 * rank + file;
		}
	}
}