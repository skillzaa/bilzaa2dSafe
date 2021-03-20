"use strict";
const randomColor = function (bdReqForAni, currentSecond) {
    bdReqForAni.forEach(element => {
        if (element.name == this.valueName) {
            element.value = randomHexColorCode();
        }
    });
    return bdReqForAni;
    ;
};
function randomHexColorCode() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}
;
exports["default"] = randomColor;