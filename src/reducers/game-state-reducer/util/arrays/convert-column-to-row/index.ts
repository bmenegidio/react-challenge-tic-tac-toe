import { Board } from "../../../types/state/state";
import { ParsedBoardToRow } from "../type/parsed-board-to-row";

export function convertColumnToRow(arrayToConvert: Board): ParsedBoardToRow[] {
  const parsedArray: ParsedBoardToRow[] = [];

  for (const [elementIndexToSearch] of arrayToConvert.entries()) {
    if (!parsedArray[elementIndexToSearch])
      parsedArray[elementIndexToSearch] = {
        boardIndexes: [],
        boardValues: [],
      };

    for (const [rowIndex, rowData] of arrayToConvert.entries()) {
      const rowDataOnSpecificIndex = rowData[elementIndexToSearch];
      parsedArray[elementIndexToSearch].boardIndexes.push({
        row: rowIndex,
        col: elementIndexToSearch,
      });
      parsedArray[elementIndexToSearch].boardValues.push(
        rowDataOnSpecificIndex
      );
    }
  }

  return parsedArray;
}
