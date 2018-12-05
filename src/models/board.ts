import { Coord } from './coord';
import { Snake } from './snake';

export class Board {
  height: number;
  width: number;
  food: Coord[];
  snakes: Snake[];
}
