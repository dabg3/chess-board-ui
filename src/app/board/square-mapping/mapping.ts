export class Mapping {
	
	// Little Endian Ranks Big Endian Files
	static readonly LER_BEF = new Mapping([0, 1, 2, 3, 4, 5, 6, 7], [7, 6, 5, 4, 3, 2, 1, 0]);
	// Big Endian Ranks Little Endian Files
	static readonly BER_LEF = new Mapping([7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7]);

	private constructor(
		readonly rankIndexes: number[],
		readonly fileIndexes: number[],
		readonly ordering?: (rank: number, file: number) => number) {

		if (!ordering) {
			this.ordering = (rank, file) => 8 * rank + file;
		}
	}
}