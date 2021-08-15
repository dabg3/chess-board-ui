import { Side } from "../side";
import { Piece } from "./piece";

export class PositionService {

	private pieces: Map<string, {type: Piece, side: Side}> = new Map();

	constructor() { 
		this.pieces.set("A1", {type: Piece.ROOK, side: Side.WHITE});
		this.pieces.set("D1", {type: Piece.QUEEN, side: Side.WHITE});
		this.pieces.set("B2", {type: Piece.BISHOP, side: Side.WHITE});

	}

	getPieceOn(squareName: string): {type: Piece, side: Side} | undefined {
		return this.pieces.get(squareName);
	}
}
