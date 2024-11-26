// toBe
// toEqual : for Array/Object
// not.toBe : Use of not property before the any method (eg, toBe)
// toBeNull
// toBeUndefined
// toBeDefined
// toBeFalsy : passes if 0, null or undefined
// toBeTruthy : for value/expression that returns true
// toBeLessThan
// toBeLessThanOrEqual
// toMatch : For Regex
// toContain : For Array

const functions = require('./function.js')

test('Add 2 + 3 to equal 4', () => {
    expect(functions.add(2, 3)).toBe(5)
});

test('Add 2 + 2 not to equal 5', ()=>{
    expect(functions.add(2, 2)).toBeDefined()
})