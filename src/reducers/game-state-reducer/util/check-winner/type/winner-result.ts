import { BoardPosition } from "../../../types/board-position/boardPosition";

export type WinnerResult = {
  won: boolean;
  winningPositions: BoardPosition[];
};
