import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieceComponent } from './piece/piece.component';
import { NgxSvgModule } from 'ngx-svg';



@NgModule({
	declarations: [
		PieceComponent
	],
	imports: [
		CommonModule,
		NgxSvgModule
	],
	exports: [
		PieceComponent
	]
})
export class PieceSetModule { }
