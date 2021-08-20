import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BoardComponent } from './board.component';
import { PositionService } from './position/position.service';
import { SquareColorPipe } from './square-color/square-color.pipe';
import { SquareMappingService } from './square-mapping/square-mapping.service';

@NgModule({
	declarations: [BoardComponent, SquareColorPipe],
	imports: [
		CommonModule
	],
	exports: [
		BoardComponent
	],
	providers: [
		SquareMappingService, PositionService
	]
})
export class BoardModule { }
