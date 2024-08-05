import { expect, test } from 'vitest';
import { sum } from './sum.js'
import {calculate} from './calculator.js'

  test('bare bones test should pass', () => {
    expect(sum(5, 7)).toBe(12)
  })

  test('bare bones test should pass', () => {
    expect(calculate('+', 9, 10)).toBe(19)
  })
  
  