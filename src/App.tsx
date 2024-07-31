import "./App.css";
import { useEffect, useReducer } from "react";
import Confetti from "react-confetti";

import { gameStateReducer } from "./reducers/game-state-reducer/gameStateReducer";
import { getInitialState } from "./reducers/game-state-reducer/data/initial-state/initialState";
import { Title } from "./components/title/Title";
import { isWinningPosition } from "./util/is-winning-position";
import { useConfettiAnimation } from "./hooks/confetti-animation";

function App() {
  const [state, dispatch] = useReducer(gameStateReducer, getInitialState());
  const { animate, isAnimating } = useConfettiAnimation();

  useEffect(() => {
    if (state.winnerPlayer > -1) {
      animate();
    }
  }, [state.winnerPlayer]);

  return (
    <div className="board-container">
      <Title
        currentPlayer={state.currentPlayer}
        isOver={state.isOver}
        winnerPlayer={state.winnerPlayer}
        won={state.winnerPlayer > -1}
      />

      <div className="board-game">
        <div className="board-row">
          {state.board.map((row, rowIndex) => {
            return row.map((column, columnIndex) => (
              <button
                key={`${rowIndex}_${columnIndex}`}
                onClick={() =>
                  dispatch({
                    type: "MAKE_A_MOVE",
                    move: { row: rowIndex, col: columnIndex },
                  })
                }
                disabled={state.isOver || state.winnerPlayer > -1}
              >
                <span
                  className={
                    isWinningPosition({
                      row: rowIndex,
                      col: columnIndex,
                      boardWinnerPositions: state.winningPositions,
                    })
                      ? "winning-position"
                      : ""
                  }
                >
                  {column}
                </span>
              </button>
            ));
          })}
        </div>
      </div>

      <button onClick={() => dispatch({ type: "RESET_GAME" })}>
        Reiniciar Jogo
      </button>

      {isAnimating && <Confetti />}
    </div>
  );
}

export default App;
