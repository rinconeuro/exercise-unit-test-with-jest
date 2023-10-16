describe('sum', () => {
    const { sum } = require('./app.js');
    test('adds 14 + 9 to equal 23', () => {

        let total = sum(14, 9);
    

        expect(total).toBe(23);
    });
});

describe('conversion', () => {
    const { oneEuroIs } = require('./app.js');
    const ratioDollarYen = oneEuroIs.JPY / oneEuroIs.USD;
    const ratioYenPound =  oneEuroIs.GBP / oneEuroIs.JPY;

    test(`One Euro should be ${oneEuroIs.USD} Dollars`, function(){

        const { fromEuroToDollar } = require('./app.js')
        const eurosToConversion = 3.5;
        const totalDollars = eurosToConversion * oneEuroIs.USD;
        

        expect(fromEuroToDollar(eurosToConversion)).toBe(totalDollars);
    })

    test(`One Dollar should be ${ratioDollarYen} Yens`, function(){
        const { fromDollarToYen } = require('./app.js')
        const dollarsToConversion = 3.5;
        const totalYens = dollarsToConversion * ratioDollarYen;


        expect(fromDollarToYen(dollarsToConversion)).toBe(totalYens);
    })

    test("One Yen should be 1.206 Punds", function(){
        const { fromYenToPound } = require('./app.js')
        const yensToConversion = 3.5;
        const totalPunds = yensToConversion * ratioYenPound;


        expect(fromYenToPound(yensToConversion)).toBe(totalPunds);
    })
})
