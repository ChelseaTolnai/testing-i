const { repair } = require('./enhancer');

describe('enhancer.js', () => {

    describe('repair()', () => {
        it('repairs item only if item is true object with required key value pairs', () => {
            const expected = {
                name: 'name',
                type: 'armor',
                durability: 100,
                enhancement: 0,                
            }
            expect(repair(item)).toEqual(expected);
            expect(repair(item2)).toBeNull();
            expect(repair(item3)).toBeNull();
            expect(repair()).toBeNull();
            expect(repair(['array'])).toBeNull();
            expect(repair(NaN)).toBeNull();
            expect(repair(undefined)).toBeNull();
            expect(repair(null)).toBeNull();
        })
    })

    describe('repair()', () => {
        it('repairs item only if item is true object with required key value pairs', () => {
            const expected = {
                name: 'name',
                type: 'armor',
                durability: 100,
                enhancement: 0,                
            }
            expect(repair(item)).toEqual(expected);
            expect(repair(item2)).toBeNull();
            expect(repair(item3)).toBeNull();
            expect(repair()).toBeNull();
            expect(repair(['array'])).toBeNull();
            expect(repair(NaN)).toBeNull();
            expect(repair(undefined)).toBeNull();
            expect(repair(null)).toBeNull();
        })
    })

})


// Testing items
const item = {
    name: 'name',
    type: 'armor',
    durability: 43,
    enhancement: 0,
};
const item2 = {
    name: [],
    type: [],
    durability: '43',
};
const item3 = {
    name: 'name',
    type: 'magic',
    durability: 43,
    enhancement: 0,
};