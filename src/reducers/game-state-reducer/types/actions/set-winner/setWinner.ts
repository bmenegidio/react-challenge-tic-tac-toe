import { BoardPosition } from "../../board-position/boardPosition";

export type SetWinnerAction = {
  type: "SET_WINNER";
  player: number;
  winningPositions: BoardPosition[];
};
