export class MoveResponse {
  move: 'up' | 'down' | 'left' | 'right';

  constructor(moveDirection: 'up' | 'down' | 'left' | 'right') {
    this.move = moveDirection;
  }
}
