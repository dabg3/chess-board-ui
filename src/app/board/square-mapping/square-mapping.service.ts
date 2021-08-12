import { Injectable } from '@angular/core';
import { Square } from './square';

@Injectable({
  providedIn: 'root', 
})
export class SquareMappingService {

  constructor() { }

  public sortSquares(): IterableIterator<Square> {
	return Square.getAll();
  }
}
