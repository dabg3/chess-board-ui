export class Square {

	private _color: Color;
	public get color(): Color {
		return this._color;
	}
	private piece: any;

	constructor(color: Color) {
		this._color = color;
	}
}