import { Board } from "../../../types/state/state";
import { ParsedBoardToRow } from "../type/parsed-board-to-row";

export function convertDiagonalToRow(arrayToConvert: Board) {
  const parsedArray: ParsedBoardToRow[] = [
    { boardIndexes: [], boardValues: [] },
    { boardIndexes: [], boardValues: [] },
  ];
  const rowIndexes = arrayToConvert.map((_, index) => index);
  const elementsIndexesToSearchToRight = [...rowIndexes];
  const elementsIndexesToSearchToLeft = [...rowIndexes].reverse();

  for (const rowIndex of rowIndexes) {
    const colIndexToRight = elementsIndexesToSearchToRight[0];
    elementsIndexesToSearchToRight.splice(0, 1);
    parsedArray[0].boardValues.push(arrayToConvert[rowIndex][colIndexToRight]);
    parsedArray[0].boardIndexes.push({
      row: rowIndex,
      col: colIndexToRight,
    });

    const colIndexToLeft = elementsIndexesToSearchToLeft[0];
    elementsIndexesToSearchToLeft.splice(0, 1);
    parsedArray[1].boardValues.push(arrayToConvert[rowIndex][colIndexToLeft]);
    parsedArray[1].boardIndexes.push({
      row: rowIndex,
      col: colIndexToLeft,
    });
  }

  return parsedArray;
}
