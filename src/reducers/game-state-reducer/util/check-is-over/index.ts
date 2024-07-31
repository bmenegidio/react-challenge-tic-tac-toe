import { DefaultValues } from "../../types/default-values/defaultValues";
import { Board } from "../../types/state/state";

export function checkIsOver(board: Board): boolean {
  return board.every((row) =>
    row.every((rowData) => rowData !== DefaultValues.EMPTY)
  );
}
