import { Levels } from "../enums/Levels";
import BOARD_MINES from "../maps/BoardMines";
import BOARD_SIZES from "../maps/BoardSizes";
import { getRandomIntegerBetween } from "../utils/numbers";
import Cell from "./Cell";
import Mine from "./Mine";

export default class Board {
  private _size: [number, number];
  private _mines: number;
  private _board: (Cell & Mine)[][] = [[]];

  constructor(level: Levels) {
    if (!BOARD_SIZES.has(level)) throw new Error("Invalid board size");
    this._size = BOARD_SIZES.get(level) || [0, 0];
    this._mines = BOARD_MINES.get(level) || 0;
    this._generate();
  }

  private _generateEmptyBoard() {
    this._board = new Array(this._size[0]).fill(null).map(() =>
      Array(this._size[1])
        .fill(null)
        .map(() => new Cell())
    );
  }

  private _updateNeighbours(row: number, col: number) {
    for (let x = row - 1; x <= row + 1; x++) {
      // Is it out of the board vertically?
      if (x < 0 || x >= this._size[0]) continue;
      for (let y = col - 1; y <= col + 1; y++) {
        // Is it out of the board horizontally?
        if (y < 0 || y >= this._size[1]) continue;
        // Skip mines
        if (this._board[x][y] instanceof Mine) continue;
        // Update cell's mines counter
        this._board[x][y].increase();
      }
    }
  }

  private _addMinesToBoard() {
    let minesToBeAdded = this._mines;
    while (minesToBeAdded) {
      const row = getRandomIntegerBetween(0, this._size[0] - 1);
      const col = getRandomIntegerBetween(0, this._size[1] - 1);

      if (this._board[row][col] instanceof Mine) continue;

      this._board[row][col] = new Mine();
      this._updateNeighbours(row, col);
      minesToBeAdded--;
    }
  }

  private _generate() {
    this._generateEmptyBoard();
    this._addMinesToBoard();
  }

  get board() {
    return this._board;
  }
}
