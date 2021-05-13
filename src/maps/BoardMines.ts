import { Levels } from "../enums/Levels";

const BOARD_MINES = new Map<Levels, number>([
  [Levels.Easy, 10],
  [Levels.Medium, 40],
  [Levels.Hard, 99],
]);

export default BOARD_MINES;
