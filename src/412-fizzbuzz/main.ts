export class FizzBuzz {
  public n;

  constructor(n: number) {
    this.n = n;
  }

  solve() {
    let string = [];
    for (let i = 1; i <= this.n; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        string.push('FizzBuzz');
      } else if (i % 3 == 0) {
        string.push('Fizz');
      } else if (i % 5 == 0) {
        string.push('Buzz');
      } else {
        string.push(`${i}`);
      }
    }
    return string;
  }
}
