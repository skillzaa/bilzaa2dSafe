"use strict";
const randomNumber = function (attributes, argsForAlgo, currentSecond) {
    if (okToRun(argsForAlgo) === false) {
        return attributes;
    } //check delay
    attributes.forEach(attributre => {
        if (attributre.name == this.attribute) {
            attributre.value = getRandomInt();
        }
    });
    return attributes;
    ;
};
function getRandomInt(max = 15) {
    return Math.floor(Math.random() * Math.floor(max));
}
function okToRun(argsForAlgo) {
    //return true;
    //first time run
    //if (typeof argsForAlgo.lastExecutionTime === "undefined" ){return true;}
    //check the delay
    const timeNow = Date.now();
    const timeLapsed = timeNow - argsForAlgo.lastExecutionTime;
    //   if (timeLapsed >= argsForAlgo.delay){
    if (timeLapsed >= 100) {
        return true;
    }
    else {
        return false;
    }
}
exports["default"] = randomNumber;