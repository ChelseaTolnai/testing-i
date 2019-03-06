const { repair, success } = require('./enhancer');

describe('enhancer.js', () => {

    describe('repair()', () => {
        it('repairs item only if item is true object with required key value pairs', () => {
            const expected = {
                name: 'Shield',
                type: 'armor',
                durability: 100,
                enhancement: 0,                
            }
            expect(repair(item1)).toEqual(expected);
            expect(() => repair(failItem1)).toThrow();
            expect(() => repair(failItem2)).toThrow();
            expect(() => repair()).toThrow();
            expect(() => repair(['array'])).toThrow();
            expect(() => repair(NaN)).toThrow();
            expect(() => repair(undefined)).toThrow();
            expect(() => repair(null)).toThrow();

        })
    })

    describe('success()', () => {
        it('increases item enhancement and updates name if item can enhance anymore', () => {
            const expected1 = {
                name: '[+1] Shield',
                type: 'armor',
                durability: 43,
                enhancement: 1,
            };
            const expected3 = {
                name: '[PRI] Knife',
                type: 'weapon',
                durability: 50,
                enhancement: 16,
            };
            expect(success(item1)).toEqual(expected1);
            expect(() => success(item2)).toThrow();
            expect(success(item3)).toEqual(expected3);
        })

        it('fails invalid item arguments', () => {
            expect(() => success(failItem1)).toThrow();
            expect(() => success(failItem2)).toThrow();
            expect(() => success(failItem3)).toThrow();
            expect(() => success()).toThrow();
            expect(() => success(['array'])).toThrow();
            expect(() => success(NaN)).toThrow();
            expect(() => success(undefined)).toThrow();
            expect(() => success(null)).toThrow();
        })
    })

})


// Testing items
const item1 = {
    name: 'Shield',
    type: 'armor',
    durability: 43,
    enhancement: 0,
};
const item2 = {
    name: '[PEN] Sword',
    type: 'weapon',
    durability: 100,
    enhancement: 20,
};
const item3 = {
    name: '[+15] Knife',
    type: 'weapon',
    durability: 50,
    enhancement: 15,
};

const failItem1 = {
    name: [],
    type: [],
    durability: '43',
};
const failItem2 = {
    name: 'name',
    type: 'magic',
    durability: 43,
    enhancement: 0,
};
const failItem3 = {
    name: 'name',
    type: 'armor',
    durability: 5,
    enhancement: 14,
};