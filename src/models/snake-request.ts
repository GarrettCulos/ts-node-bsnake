import { Game } from './game';
import { Board } from './board';
import { Snake } from './snake';

export class SnakeRequest {
  game: Game;
  turn: number;
  board: Board;
  you: Snake;
}
