import { BoardPosition } from "../board-position/boardPosition";

export type Board = string[][];

export type State = {
  currentPlayer: number;
  winnerPlayer: number;
  isOver: boolean;
  board: Board;
  winningPositions: BoardPosition[];
};
