//Task1: Pulse oximeter reading part 1
let oxygenLev=95;

function oxiReading(oxygenLev){
    if(oxygenLev>=96){
        console.log("Normal reading.");
    }else if(oxygenLev===95){
        console.log("Acceptable to continue home monitoring.");
    }else if(oxygenLev<95 && oxygenLev>=93){
        console.log("Seek advice from health professionals.");
    }else if(oxygenLev<=92){
        console.log("Seek urgent medical advice.")
    }
}
oxiReading(oxygenLev);

//Task 2: Pulse oximeter reading part 2
let pulseRate=85;

function oxiReading2(pulseRate){
    if(pulseRate>=40 && pulseRate<=100){
        console.log("Normal reading.");
    }else if(pulseRate>100 && pulseRate<=109){
        console.log("Acceptable to continue home monitoring.");
    }else if(pulseRate>=110 && pulseRate<=130){
        console.log("Seek advice from health professionals.");
    }else if(pulseRate>=131) {
        console.log("Seek urgent medical advice.")
    }
}
oxiReading2(pulseRate);