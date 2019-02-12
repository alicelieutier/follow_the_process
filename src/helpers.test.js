import {shuffled} from './helpers';
import {mockRandom} from 'jest-mock-random';

describe('shuffled', () => {
    it('returns an empty array for an empty array', () => {
        const array = [];
        expect(shuffled(array)).toEqual([]);
    })
    it('returns an array of the same size', () => {
        const array = [1,2,3,4,5,6];
        expect(shuffled(array)).toHaveLength(array.length);
    })
    it('returns an array containing all the initial elements', () => {
        const array = [1,2,3,4,5,6];
        expect(shuffled(array)).toEqual(expect.arrayContaining(array));
    })
    it('returns a different object', () => {
        const array = [1,2,3,4,5,6];
        expect(shuffled(array)).not.toBe(array);
    })
    it('returns a shuffled array', () => {
        mockRandom([0.1, 0.5, 0.2, 0.4, 0.9]);
        const array = [1,2,3,4,5,6];
        expect(shuffled(array)).toEqual([5, 3, 2, 4, 6, 1]);
    })
})

  