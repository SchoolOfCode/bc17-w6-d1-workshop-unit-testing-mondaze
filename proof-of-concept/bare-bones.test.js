import { expect, test } from 'vitest';
import { sum } from './sum.js'


  test('bare bones test should pass', () => {
    expect(sum(5, 7)).toBe(12)
  })

  console.log(test);
  