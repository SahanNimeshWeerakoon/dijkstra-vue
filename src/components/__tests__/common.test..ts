import { describe, it, expect } from "vitest";
import { getNodeFromNumber } from '../../utils/common.js';

describe('getNodeFromNumber', ()=> {
    it('should return the connect node for valid number', () => {
        expect(getNodeFromNumber(1)).toBe("A");
        expect(getNodeFromNumber(2)).toBe("B");
        expect(getNodeFromNumber(3)).toBe("C");
        expect(getNodeFromNumber(4)).toBe("D");
        expect(getNodeFromNumber(5)).toBe("E");
        expect(getNodeFromNumber(6)).toBe("F");
        expect(getNodeFromNumber(7)).toBe("G");
        expect(getNodeFromNumber(8)).toBe("H");
        expect(getNodeFromNumber(9)).toBe("I");
    })

    it('should return undefined for invalid number', () => {
        expect(getNodeFromNumber(10)).toBeUndefined();
        expect(getNodeFromNumber(0)).toBeUndefined();
        expect(getNodeFromNumber(-1)).toBeUndefined();
    })
});