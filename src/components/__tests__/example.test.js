import { test, expect } from 'vitest'

function sum(a, b) {
    return a + b;
}

test("add two numbers", () => {
    expect(sum(2, 3)).toEqual(5)
})