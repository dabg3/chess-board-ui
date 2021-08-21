import { InjectionToken } from "@angular/core";
import { Piece } from "./piece";
import { PieceImageService } from "./piece-image-service";
import { Side } from "./side";

export const DEFAULT_IMAGE_PROVIDER = new InjectionToken<PieceImageService>('Default piece images provider',
	{ 
		factory: () => new DefaultImageProvider()
	});

export class DefaultImageProvider implements PieceImageService {

	constructor() {}

	public locateImage(piece: { type: Piece, side: Side }): string {
		switch (piece.type) {
			case "R":
				return piece.side == Side.WHITE ? "/assets/Chess_rlt45.svg" : "/assets/Chess_rdt45.svg";
			case "N":
				return piece.side == Side.WHITE ? "/assets/Chess_nlt45.svg" : "/assets/Chess_ndt45.svg";
			case "B":
				return piece.side == Side.WHITE ? "/assets/Chess_blt45.svg" : "/assets/Chess_bdt45.svg";
			case "K":
				return piece.side == Side.WHITE ? "/assets/Chess_klt45.svg" : "/assets/Chess_kdt45.svg";
			case "Q":
				return piece.side == Side.WHITE ? "/assets/Chess_qlt45.svg" : "/assets/Chess_qdt45.svg";
			default:
				throw new Error(piece.type + " unknown piece");
		}
	}
}
