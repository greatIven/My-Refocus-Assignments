//Task1: TemperatureConverter

function convertToKelvinC(tempCelsius){
    let kelvinVal=tempCelsius+273.15;
    return kelvinVal;
}

console.log(convertToKelvinC(84));
console.log(convertToKelvinC(95));

function convertToKelvinF(tempFahrenheit){
    let kelvinVal=(tempFahrenheit+459.67)*(5/9);
    return kelvinVal;
}
console.log(convertToKelvinF(84));
console.log(convertToKelvinF(95));

//Task2: Tip Calculator

function computeTip(totalBill){
    let tip=totalBill*.10;
    return tip;
}
console.log(computeTip(520));
