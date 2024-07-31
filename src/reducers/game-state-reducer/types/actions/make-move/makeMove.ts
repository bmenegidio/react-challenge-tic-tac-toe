export type MakeMove = {
  type: "MAKE_A_MOVE";
  move: {
    row: number;
    col: number;
  };
};
