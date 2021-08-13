import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSvgModule } from 'ngx-svg';
import { BoardComponent } from './board.component';
import { SquareColorPipe } from './square-color/square-color.pipe';
import { SquareMappingService } from './square-mapping/square-mapping.service';

@NgModule({
	declarations: [BoardComponent, SquareColorPipe],
	imports: [
		CommonModule,
		NgxSvgModule
	],
	exports: [
		BoardComponent
	],
	providers: [
		SquareMappingService
	]
})
export class BoardModule { }
