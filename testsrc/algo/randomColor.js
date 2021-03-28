"use strict";
const randomColor = function (attributes, argsForAlgo, currentSecond) {
    if (okToRun(argsForAlgo) === false) {
        return attributes;
    } //check delay
    console.log(argsForAlgo.lastExecutionTime);
    attributes.forEach(attr => {
        if (attr.name == this.attribute) {
            attr.value = randomHexColorCode();
        }
    });
    return attributes;
};
function randomHexColorCode() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}
;
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
exports["default"] = randomColor;