import { expect, test } from 'vitest';

import { operator, calculate } from './calculator';



  test('bare bones test should pass', () => {
    expect(calculate('+', 9, 10)).toBe(19);
    expect(calculate('-', 4, 6)). toBe(-2);
    expect(calculate('*', -6, -8)). toBe(48);
    expect(calculate('/', 121, 11)). toBe(11);
    expect(calculate('sq', 5)). toBe(25);
    expect(calculate('sq', 3, 44)). toBe(9);
    
    expect(() => calculate('%', 124, 56)).toThrow('Unsupported operator %');
    expect(() => calculate(operator, 124, 56)).toThrow(`Unsupported operator ${operator}`);
    //expect(calculate('%', 124, 56)). toThrow(`Unsupported operators ${operator}`);
    //expect(calculate('🍕', -41414, 2)).toThrow(`Unsupported operators ${operator}`);
    
    
  })
  
 