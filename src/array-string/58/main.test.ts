import { lengthOfLastWord } from './main';

describe('58. Length of Last Word', () => {
  it('Hello World', () => {
    expect(lengthOfLastWord('Hello World')).toBe(5);
  });
  it('   fly me   to   the moon  ', () => {
    expect(lengthOfLastWord('   fly me   to   the moon  ')).toBe(4);
  });

  it('luffy is still joyboy', () => {
    expect(lengthOfLastWord('luffy is still joyboy')).toBe(6);
  });
});
