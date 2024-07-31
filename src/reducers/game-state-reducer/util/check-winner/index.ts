import { BoardPosition } from "../../types/board-position/boardPosition";
import { Board } from "../../types/state/state";
import { convertColumnToRow } from "../arrays/convert-column-to-row";
import { convertDiagonalToRow } from "../arrays/convert-diagonal-to-row";
import { returnWinningRowIndex } from "../return-winning-row-index";
import { WinnerResult } from "./type/winner-result";

export function checkWinner(board: Board): WinnerResult {
  let winningRowIndex = returnWinningRowIndex(board);
  let won = winningRowIndex > -1;
  let winningPositions: BoardPosition[] = [0, 1, 2].map((col) => ({
    row: winningRowIndex,
    col: col,
  }));

  if (!won) {
    const columnsToRow = convertColumnToRow(board);
    const boardData = columnsToRow.map((object) => object.boardValues);
    const boardIndexes = columnsToRow.map((object) => object.boardIndexes);

    winningRowIndex = returnWinningRowIndex(boardData);
    won = winningRowIndex > -1;
    winningPositions = boardIndexes[winningRowIndex];
  }

  if (!won) {
    const diagonalToRow = convertDiagonalToRow(board);
    const boardData = diagonalToRow.map((object) => object.boardValues);
    const boardIndexes = diagonalToRow.map((object) => object.boardIndexes);

    winningRowIndex = returnWinningRowIndex(boardData);
    won = winningRowIndex > -1;
    winningPositions = boardIndexes[winningRowIndex];
  }

  return {
    won,
    winningPositions,
  };
}
