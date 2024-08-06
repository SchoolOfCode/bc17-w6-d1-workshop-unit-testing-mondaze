import {
    calculateRoundResult,
    generateComputerMove,
    PAPER
}
from './app.js'

import { expect, test } from 'vitest';

import {
    ROCK, PAPER, SCISSORS, WIN, LOSS, DRAW
}
from './app.js'

test('RPS logic', () => {
    expect(calculateRoundResult(ROCK , ROCK)).toBe("draw");
//     expect(calculateRoundResult(ROCK , PAPER)).toBe(LOSS);
//     expect(calculateRoundResult(ROCK , SCISSORS)).toBe(WIN);
//     expect(calculateRoundResult(PAPER , ROCK)).toBe(WIN);
//     expect(calculateRoundResult(PAPER , PAPER)).toBe(DRAW);
//     expect(calculateRoundResult(PAPER , SCISSORS)).toBe(LOSS);
//     expect(calculateRoundResult(SCISSORS , ROCK)).toBe(LOSS);
//     expect(calculateRoundResult(SCISSORS , SCISSORS)).toBe(DRAW);
//     expect(calculateRoundResult(SCISSORS , PAPER)).toBe(WIN);
 })