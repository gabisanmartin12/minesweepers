import Level from "../enums/Level";

const BOARD_SIZES = new Map<Level, [number, number]>([
  [Level.Easy, [9, 9]],
  [Level.Medium, [16, 16]],
  [Level.Hard, [16, 30]],
]);

export default BOARD_SIZES;
