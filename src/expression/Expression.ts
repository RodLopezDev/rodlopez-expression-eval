class Expression {
  tokens;
  ops1;
  ops2;
  functions;
  constructor(tokens: string, ops1: any, ops2: any, functions: any) {
    this.tokens = tokens;
    this.ops1 = ops1;
    this.ops2 = ops2;
    this.functions = functions;
  }
  toString() {
    return "toString";
  }
}

export default Expression;
