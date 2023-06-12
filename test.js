/*// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});
*/

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})


test("One dollar to yen is equal to yen/dollars...106.58 yen for one dollar ", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(5)

    // if 1 dollar are 106.58 yens, then 5 dollars should be (5 * 106.58)
    const expected = 5 * 106.58; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(5)).toBe(532.9); //1 dollar are 106.59 yens
})

test("One yen to pount test. One yen is 0.00625 pounds ", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(1000)

    // if 1 yen is 0.00625 pounds, then 1000 yens should be (1000 * 0.00625)
    const expected = 1000 * 0.00625; 
    
    // this is the comparison for the unit test
     expect(pounds).toBe(expected); 
})