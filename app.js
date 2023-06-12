/*// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
//console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum };
*/
//////////////////////////////////
// conversion ratios
// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


function fromEuroToDollar(euros){
    return oneEuroIs["USD"] * euros;

}

function fromDollarToYen(dollars){
    //    oneEuroIs.JPY/oneEuroIs.USD : 106.58
    return 106.58 * dollars;
}

function fromYenToPound(yens){
    return 0.00625 * yens;
}
//check function
//console.log(fromEuroToDollar(10));
//console.log(fromDollarToYen(5));
//console.log(fromYenToPound(1000));

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
