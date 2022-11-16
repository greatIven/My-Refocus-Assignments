var bmi=0;
const myFunction={
    getBMI: function(height,weight){
        var squareOFHeights=(height*height);
        return bmi=weight/squareOFHeights;
    }
};

// function getBMI(height,weight){
//     var squareOFHeights=(height*height);
//     return bmi=weight/squareOFHeights;
// }
console.log("Body Mass Index of the given Height in Meter and Weight in Kg");
console.log(myFunction.getBMI(1.75,75).toFixed(2));

console.log(myFunction.getBMI(1.52,60).toFixed(2));


module.exports=myFunction;


