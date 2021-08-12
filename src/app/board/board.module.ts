import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxSvgModule } from 'ngx-svg';
import { BoardComponent } from './board.component';
import { SquareMappingService } from './square-mapping/square-mapping.service';

@NgModule({
	declarations: [BoardComponent],
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
