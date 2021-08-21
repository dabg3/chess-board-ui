import { Piece } from "./piece";
import { Side } from "./side";

export interface PieceImageService {
	locateImage(piece: { type: Piece, side: Side }): string;
}