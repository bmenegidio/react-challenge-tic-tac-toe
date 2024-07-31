import { getInitialState } from "./data/initial-state/initialState";
import {
  FinishGameAction,
  ResetGameAction,
  SetWinnerAction,
} from "./types/actions";
import { MakeMove } from "./types/actions/make-move/makeMove";

import { DefaultValues } from "./types/default-values/defaultValues";
import { PlayerType } from "./types/player-type/playerType";
import { State } from "./types/state/state";
import { checkIsOver } from "./util/check-is-over";
import { checkWinner } from "./util/check-winner";

type Action = FinishGameAction | SetWinnerAction | MakeMove | ResetGameAction;

export const gameStateReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "RESET_GAME":
      return getInitialState();

    case "FINISH_GAME":
      return {
        ...state,
        isOver: true,
      };

    case "SET_WINNER": {
      const { player, winningPositions } = action;
      return {
        ...state,
        winnerPlayer: player,
        winningPositions,
      };
    }

    case "MAKE_A_MOVE": {
      const isPositionBusy =
        state.board[action.move.row][action.move.col] !== DefaultValues.EMPTY;
      if (isPositionBusy) {
        return state;
      }

      const moveValue = {
        1: DefaultValues.PLAYER_1,
        2: DefaultValues.PLAYER_2,
      };
      const newBoard = state.board.map((row) => [...row]);
      newBoard[action.move.row][action.move.col] =
        moveValue[state.currentPlayer as PlayerType];

      const { won, winningPositions } = checkWinner(newBoard);
      const winnerState = {
        winnerPlayer: state.currentPlayer,
        winningPositions,
      };

      const isOver = checkIsOver(newBoard);
      const isOverState = { isOver };

      const nextPlayer = state.currentPlayer === 1 ? 2 : 1;
      return {
        ...state,
        board: newBoard,
        currentPlayer: nextPlayer,
        ...(!won && isOverState),
        ...(won && winnerState),
      };
    }

    default:
      return state;
  }
};
