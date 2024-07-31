import "./Title.css";

type TitleProps = {
  won: boolean;
  winnerPlayer: number;
  currentPlayer: number;
  isOver: boolean;
};

export function Title({
  isOver,
  winnerPlayer,
  won,
  currentPlayer,
}: TitleProps) {
  let message = `Jogador da Vez: ${currentPlayer}`;
  let classNameAnimation = "";
  if (won) {
    message = `Jogador ${winnerPlayer} Venceu!`;
    classNameAnimation = "won";
  }

  if (isOver) {
    message = `Deu Velha!`;
  }

  return (
    <div className="title-container">
      <span className="title">Jogo da Velha (Tic Tac Toe)</span>
      <span className={`subtitle ${classNameAnimation}`}>{message}</span>
    </div>
  );
}
