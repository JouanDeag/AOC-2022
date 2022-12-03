import { readFileSync } from 'fs';

console.time('Time');

const lines = readFileSync('input.txt', 'utf8')
  .replace(/(\r)/gm, '')
  .split('\n');

let partOneSum = 0;
let partTwoSum = 0;

const hasUpperCase = (s: string) => s.toUpperCase() == s;

const scoreLookup = (s: string) => {
  let score = 0;
  if (!s) return 0;
  score += s.toLowerCase().charCodeAt(0) - 96;

  if (hasUpperCase(s)) {
    score += 26;
  }

  return score;
};

for (const line of lines) {
  let middle: number = Math.floor(line.length / 2);
  let firstHalf: string = line.slice(0, middle);
  let secondHalf: string = line.slice(middle, line.length);

  let result = firstHalf
    .split('')
    .filter((firstHalf_) => secondHalf.includes(firstHalf_))[0];

  partOneSum += scoreLookup(result);
}

// Split lines into groups of 3
for (let i = 0; i < lines.length; i += 3) {
  let result = lines[i]
    .split('')
    .filter(
      (lineOne) =>
        lines[i + 1].includes(lineOne) && lines[i + 2].includes(lineOne)
    )[0];
  partTwoSum += scoreLookup(result);
}
console.timeEnd('Time');
console.log(`Part 1: ${partOneSum} | Part 2: ${partTwoSum}`);
