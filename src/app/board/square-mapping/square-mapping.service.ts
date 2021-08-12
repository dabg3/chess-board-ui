import { Square } from './square';

export class SquareMappingService {

  constructor() { }

  public sortSquares(): IterableIterator<Square> {
	return Square.getAll();
  }
}
