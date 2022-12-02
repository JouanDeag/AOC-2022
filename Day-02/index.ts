// A: ROCK
// B: PAPER
// C: SCISSORS

// Responses:
// X: ROCK
// Y: PAPER
// Z: SCISSORS

// Scoring:
// ROCK: 1
// PAPER: 2
// SCISSORS: 3
// +0 = LOSS
// +6 = WIN
// +3 = TIE

import { readFileSync } from 'fs';
console.time('Time');

const secretHands = {
  'A X': 4,
  'A Y': 8,
  'A Z': 3,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 7,
  'C Y': 2,
  'C Z': 6,
};

const uSecretHands = {
  'A X': 3,
  'A Y': 4,
  'A Z': 8,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 2,
  'C Y': 6,
  'C Z': 7,
};

let secretScore = 0;
let uSecretScore = 0;

readFileSync('input.txt', 'utf8')
  .split('\n')
  .map((line: string) => {
    // Part 1
    const secretHandScore = secretHands[line as keyof typeof secretHands];
    secretScore += secretHandScore;

    // Part 2
    const uSecretHandScore = uSecretHands[line as keyof typeof uSecretHands];
    uSecretScore += uSecretHandScore;
  });

console.timeEnd('Time');
console.log(
  `Secret Strategy Score: ${secretScore} | Ultra Secret Strategy Score: ${uSecretScore}`
);
