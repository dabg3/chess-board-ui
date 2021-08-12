export class Square {

	private static squaresByLocation: Map<{ rank: number, file: number }, Square> = new Map();

	static readonly A1 = Square.init("A1", { rank: 1, file: 1 });
	static readonly A2 = Square.init("A2", { rank: 2, file: 1 });
	static readonly A3 = Square.init("A3", { rank: 3, file: 1 });
	static readonly A4 = Square.init("A4", { rank: 4, file: 1 });
	static readonly A5 = Square.init("A5", { rank: 5, file: 1 });
	static readonly A6 = Square.init("A6", { rank: 6, file: 1 });
	static readonly A7 = Square.init("A7", { rank: 7, file: 1 });
	static readonly A8 = Square.init("A8", { rank: 8, file: 1 });

	static readonly B1 = Square.init("B1", { rank: 1, file: 2 });
	static readonly B2 = Square.init("B2", { rank: 2, file: 2 });
	static readonly B3 = Square.init("B3", { rank: 3, file: 2 });
	static readonly B4 = Square.init("B4", { rank: 4, file: 2 });
	static readonly B5 = Square.init("B5", { rank: 5, file: 2 });
	static readonly B6 = Square.init("B6", { rank: 6, file: 2 });
	static readonly B7 = Square.init("B7", { rank: 7, file: 2 });
	static readonly B8 = Square.init("B8", { rank: 8, file: 2 });

	static readonly C1 = Square.init("C1", { rank: 1, file: 3 });
	static readonly C2 = Square.init("C2", { rank: 2, file: 3 });
	static readonly C3 = Square.init("C3", { rank: 3, file: 3 });
	static readonly C4 = Square.init("C4", { rank: 4, file: 3 });
	static readonly C5 = Square.init("C5", { rank: 5, file: 3 });
	static readonly C6 = Square.init("C6", { rank: 6, file: 3 });
	static readonly C7 = Square.init("C7", { rank: 7, file: 3 });
	static readonly C8 = Square.init("C8", { rank: 8, file: 3 });

	static readonly D1 = Square.init("D1", { rank: 1, file: 4 });
	static readonly D2 = Square.init("D2", { rank: 2, file: 4 });
	static readonly D3 = Square.init("D3", { rank: 3, file: 4 });
	static readonly D4 = Square.init("D4", { rank: 4, file: 4 });
	static readonly D5 = Square.init("D5", { rank: 5, file: 4 });
	static readonly D6 = Square.init("D6", { rank: 6, file: 4 });
	static readonly D7 = Square.init("D7", { rank: 7, file: 4 });
	static readonly D8 = Square.init("D8", { rank: 8, file: 4 });

	static readonly E1 = Square.init("E1", { rank: 1, file: 5 });
	static readonly E2 = Square.init("E2", { rank: 2, file: 5 });
	static readonly E3 = Square.init("E3", { rank: 3, file: 5 });
	static readonly E4 = Square.init("E4", { rank: 4, file: 5 });
	static readonly E5 = Square.init("E5", { rank: 5, file: 5 });
	static readonly E6 = Square.init("E6", { rank: 6, file: 5 });
	static readonly E7 = Square.init("E7", { rank: 7, file: 5 });
	static readonly E8 = Square.init("E8", { rank: 8, file: 5 });

	static readonly F1 = Square.init("F1", { rank: 1, file: 6 });
	static readonly F2 = Square.init("F2", { rank: 2, file: 6 });
	static readonly F3 = Square.init("F3", { rank: 3, file: 6 });
	static readonly F4 = Square.init("F4", { rank: 4, file: 6 });
	static readonly F5 = Square.init("F5", { rank: 5, file: 6 });
	static readonly F6 = Square.init("F6", { rank: 6, file: 6 });
	static readonly F7 = Square.init("F7", { rank: 7, file: 6 });
	static readonly F8 = Square.init("F8", { rank: 8, file: 6 });
	
	static readonly G1 = Square.init("G1", { rank: 1, file: 7 });
	static readonly G2 = Square.init("G2", { rank: 2, file: 7 });
	static readonly G3 = Square.init("G3", { rank: 3, file: 7 });
	static readonly G4 = Square.init("G4", { rank: 4, file: 7 });
	static readonly G5 = Square.init("G5", { rank: 5, file: 7 });
	static readonly G6 = Square.init("G6", { rank: 6, file: 7 });
	static readonly G7 = Square.init("G7", { rank: 7, file: 7 });
	static readonly G8 = Square.init("G8", { rank: 8, file: 7 });

	static readonly H1 = Square.init("H1", { rank: 1, file: 8 });
	static readonly H2 = Square.init("H2", { rank: 2, file: 8 });
	static readonly H3 = Square.init("H3", { rank: 3, file: 8 });
	static readonly H4 = Square.init("H4", { rank: 4, file: 8 });
	static readonly H5 = Square.init("H5", { rank: 5, file: 8 });
	static readonly H6 = Square.init("H6", { rank: 6, file: 8 });
	static readonly H7 = Square.init("H7", { rank: 7, file: 8 });
	static readonly H8 = Square.init("H8", { rank: 8, file: 8 });

	private static squares: Square[] = [];

	private static init(squareName: string, coordinates: {rank: number, file: number}): Square {
		const sqInstance: Square = new Square(squareName, coordinates);
		Square.squaresByLocation.set(coordinates, sqInstance);
		return sqInstance;
	}

	private constructor(
		private squareName: string,
		readonly naturalIndexes: { rank: number, file: number }
	) {}

	static getAll(): IterableIterator<Square> {
		return Square.squaresByLocation.values();
	}
	
	// static at(rank: number, file: number): Square {
	// 	if (!rank || !file) {
	// 		throw new Error("invalid coordinates (rank, file): " + rank + ',' + file);
	// 	}

	// 	const square: Square | undefined = this.squaresByLocation.get({rank, file});
	// 	if (!square) {
	// 		throw new Error("unable to find square at (rank, file): " + rank + ',' + file);
	// 	}
	// 	return square;
	// }

	// used by default: console.log(Square.A1) prints "A1"
	toString(): string {
		return this.squareName;
	}

}