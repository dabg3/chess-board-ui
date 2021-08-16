import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSvgModule } from 'ngx-svg';
import { PieceComponent } from './piece/piece.component';



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
