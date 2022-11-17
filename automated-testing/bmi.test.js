const myFunction = require("./bmi_calculator.js");

test("Check Body Mass Index of 1.75 Meters and 75 Kg", () =>{
    expect(myFunction.getBMI(1.75,75)).toBeCloseTo(24.49);
});

test("Check Body Mass Index of 1.52 Meters and 60 Kg", () =>{
    expect(myFunction.getBMI(1.52,60)).toBeCloseTo(25.97);
});

//Test Case for Failed---------

// test("Check Body Mass Index of 1.75 Meters and 75 Kg", () =>{
//     expect(myFunction.getBMI(1.75,75)).toBeCloseTo(24.50);
// });

// test("Check Body Mass Index of 1.52 Meters and 60 Kg", () =>{
//     expect(myFunction.getBMI(1.52,60)).toBeCloseTo(25.62);
// });

