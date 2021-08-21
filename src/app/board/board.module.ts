import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { PositionService } from './position/position.service';
import { SquareColorPipe } from './square-color/square-color.pipe';
import { SquareMappingService } from './square-mapping/square-mapping.service';
import { PieceDirective } from './position/piece.directive';

@NgModule({
	declarations: [
		BoardComponent,
		SquareColorPipe,
		PieceDirective
	],
	imports: [
		CommonModule
	],
	exports: [
		BoardComponent
	],
	providers: [
		SquareMappingService, 
		PositionService, 
	]
})
export class BoardModule { }
