export function lengthOfLastWord(s: string): number {
  let size = 0;
  let i = 0;
  let last = 0;

  while (i < s.length) {
    if (s[i] === ' ') {
      if (size != 0) {
        last = size;
      }

      size = 0;
    } else {
      size++;
    }
    i++;
  }

  if (size > 0 && s[i] != ' ') {
    last = size;
  }

  return last;
}
