import Char from "enums/Char";

class Token {
  type;
  index;
  prio;
  number;
  constructor(_type: Char, _index: number, _prio: any, _number: any) {
    this.type = _type;
    this.index = _index;
    this.prio = _prio;
    this.number = _number;
  }
  toString(): string {
    if (this.type == Char.TNUMBER) {
      return this.number;
    } else if ([Char.TOP1, Char.TOP2, Char.TVAR].includes(this.type)) {
      return String(this.index);
    } else if (this.type == Char.TFUNCALL) {
      return "CALL";
    } else {
      return "Invalid Token";
    }
  }
}

export default Token;
