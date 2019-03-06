const { repair } = require('./enhancer');

describe('enhancer.js', () => {
    describe('repair()', () => {
        it('repairs item only if item is true object with required key value pairs', () => {
            const item = {
                name: 'name',
                type: 'type',
                durability: 43,
                enhancement: 0,
            };
            const item2 = {
                name: [],
                type: [],
                durability: '43',
            };
            const expected = {
                name: 'name',
                type: 'type',
                durability: 100,
                enhancement: 0,                
            }
            expect(repair(item)).toEqual(expected);
            expect(repair(item2)).toBeNull();
            expect(repair()).toBeNull();
            expect(repair(['array'])).toBeNull();
        })
    })
})
