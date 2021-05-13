import Level from "../enums/Level";

const BOARD_MINES = new Map<Level, number>([
  [Level.Easy, 10],
  [Level.Medium, 40],
  [Level.Hard, 99],
]);

export default BOARD_MINES;
