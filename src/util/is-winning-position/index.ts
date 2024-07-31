import { BoardPosition } from "../../reducers/game-state-reducer/types/board-position/boardPosition";

export function isWinningPosition({
  row,
  col,
  boardWinnerPositions,
}: BoardPosition & { boardWinnerPositions: BoardPosition[] }): boolean {
  return (
    boardWinnerPositions.findIndex(
      (position) => position.row === row && position.col === col
    ) > -1
  );
}
