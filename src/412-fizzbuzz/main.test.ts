import { FizzBuzz } from './main';

describe('fizzbuzz', () => {
  it('n = 3', () => {
    expect(new FizzBuzz(3).solve()).toStrictEqual(['1', '2', 'Fizz']);
  });

  it('n = 5', () => {
    expect(new FizzBuzz(5).solve()).toStrictEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
    ]);
  });

  it('n = 15', () => {
    expect(new FizzBuzz(15).solve()).toStrictEqual([
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ]);
  });
});
