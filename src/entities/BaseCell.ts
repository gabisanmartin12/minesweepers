export default abstract class BaseCell {
  protected _isMarked: boolean = false;
  protected _wasVisited: boolean = false;
  protected _value: number = 0;

  get value() {
    return this._value;
  }

  get isMarked() {
    return this._isMarked;
  }

  toggleMarked() {
    this._isMarked = !this._isMarked;
  }

  get wasVisited() {
    return this._wasVisited;
  }

  setVisited() {
    this._wasVisited = true;
  }
}
