import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

	@ViewChild('myCanvas', { static: true })
	private canvasRef: ElementRef<HTMLCanvasElement>;

	private canvas: HTMLCanvasElement;
	private _2dContext: CanvasRenderingContext2D;

	private squareSizePx: number;

	constructor() { }

	ngOnInit(): void {
		const canvas: HTMLCanvasElement | null = this.canvasRef.nativeElement;
		if (!canvas) {
			throw new Error('unable to retrieve HtmlCanvasElement instance');
		}
		if (!(canvas.height == canvas.width)) {
			throw new Error('canvas is not squared');
		}
		const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
		if (!ctx) {
			throw new Error('unable to retrieve CanvasRenderingContext2D instance');
		}
		this.canvas = canvas;
		this._2dContext = ctx;
	}

	ngAfterViewInit(): void {
		this.squareSizePx = this.canvas.height / 8;
		this.drawChessSquares();
	}

	private drawChessSquares(): void {
		for (let rank = 0, y = 0; y < this.canvas.height; rank++, y = rank * this.squareSizePx) {
			for (let file = 0, x = 0; x < this.canvas.width; file++, x = file * this.squareSizePx) {
				const sqColor: string =
					this.isSquareWhite(rank, file) ? "#ffffdd" : "#86a666";
				this._2dContext.fillStyle = sqColor;
				this._2dContext.fillRect(x, y, this.squareSizePx, this.squareSizePx);

				console.log(x, y, sqColor)
			}

		}
	}

	private isSquareWhite(rank: number, file: number): boolean {
		const rankAndFileEven: boolean = rank % 2 == 0 && file % 2 == 0;
		const rankAndFileOdd: boolean = rank % 2 == 1 && file % 2 == 1;
		return rankAndFileEven || rankAndFileOdd;
	}

	onClick(event: MouseEvent): void {
		// this._2dContext.fillStyle = "black";
		// this._2dContext.fillText("click", event.clientX, event.clientY);
		const file: number = Math.trunc(event.clientX / this.squareSizePx);
		const rank: number = Math.trunc(event.clientY / this.squareSizePx);
		this._2dContext.fillStyle = "red";
		this._2dContext.fillRect(file * this.squareSizePx, rank * this.squareSizePx, this.squareSizePx, this.squareSizePx)

		const intrvl = setInterval(() => {
			this._2dContext.fillStyle = this.isSquareWhite(rank, file) ? "#ffffdd" : "#86a666";
			this._2dContext.fillRect(file * this.squareSizePx, rank * this.squareSizePx, this.squareSizePx, this.squareSizePx)
			clearInterval(intrvl);
		}, 500);

		console.log(file, rank);
	}

}
