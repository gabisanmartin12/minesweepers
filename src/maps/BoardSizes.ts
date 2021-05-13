import { Levels } from "../enums/Levels";

const BOARD_SIZES = new Map<Levels, [number, number]>([
  [Levels.Easy, [9, 9]],
  [Levels.Medium, [16, 16]],
  [Levels.Hard, [16, 30]],
]);

export default BOARD_SIZES;
