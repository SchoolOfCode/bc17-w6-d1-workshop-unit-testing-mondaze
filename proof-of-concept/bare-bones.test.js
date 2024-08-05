import { expect, test } from 'vitest';

function sum(a, b) {
    return a + b
  }

  test('bare bones test should pass', () => {
    expect(sum(1, 2)).toBe(3)
  })

  console.log(test);
  