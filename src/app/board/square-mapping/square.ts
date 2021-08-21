import { Piece } from "../position/piece";
import { Side } from "../position/side";

export class Square {

	public constructor(
		readonly name: string,
		readonly rank: number,
		readonly file: number,
		private _piece?: { type: Piece, side: Side }) {
	}

	get piece(): { type: Piece, side: Side } | undefined {
		return this._piece;
	}

	set piece(value: { type: Piece, side: Side } | undefined) {
		this._piece = value;
	}

}