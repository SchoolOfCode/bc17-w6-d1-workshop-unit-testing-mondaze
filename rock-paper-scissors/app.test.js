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
    expect(calculateRoundResult(ROCK, ROCK).outcome).toBe("draw");
    expect(calculateRoundResult(ROCK , PAPER).outcome).toBe("loss");
    expect(calculateRoundResult(ROCK , SCISSORS).outcome).toBe(WIN);
    expect(calculateRoundResult(PAPER , ROCK).outcome).toBe(WIN);
    expect(calculateRoundResult(PAPER , PAPER).outcome).toBe(DRAW);
    expect(calculateRoundResult(PAPER , SCISSORS).outcome).toBe(LOSS);
    expect(calculateRoundResult(SCISSORS , ROCK).outcome).toBe(LOSS);
    expect(calculateRoundResult(SCISSORS , SCISSORS).outcome).toBe(DRAW);
    expect(calculateRoundResult(SCISSORS , PAPER).outcome).toBe(WIN);
 })