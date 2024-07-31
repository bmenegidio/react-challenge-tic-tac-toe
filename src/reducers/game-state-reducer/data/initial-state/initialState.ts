import { DefaultValues } from "../../types/default-values/defaultValues";
import { State } from "../../types/state/state";

const INITIAL_STATE_DATA: State = {
  currentPlayer: 1,
  winnerPlayer: -1,
  isOver: false,
  board: [
    [DefaultValues.EMPTY, DefaultValues.EMPTY, DefaultValues.EMPTY],
    [DefaultValues.EMPTY, DefaultValues.EMPTY, DefaultValues.EMPTY],
    [DefaultValues.EMPTY, DefaultValues.EMPTY, DefaultValues.EMPTY],
  ],
  winningPositions: [],
};

export const getInitialState = (): State => structuredClone(INITIAL_STATE_DATA);
