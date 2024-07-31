import { DefaultValues } from "../../types/default-values/defaultValues";
import { Board } from "../../types/state/state";

export function returnWinningRowIndex(boardData: Board): number {
  return boardData.findIndex(
    (row) =>
      row.every((rowData) => rowData === DefaultValues.PLAYER_1) ||
      row.every((rowData) => rowData === DefaultValues.PLAYER_2)
  );
}
