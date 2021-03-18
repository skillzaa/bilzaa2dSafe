const randomNumber = function (bdReqForAni, currentSecond) {
    bdReqForAni.forEach(attributre => {
        if (attributre.name == this.valueName) {
            attributre.value = getRandomInt();
        }
    });
    return bdReqForAni;
    ;
};
function getRandomInt(max = 15) {
    return Math.floor(Math.random() * Math.floor(max));
}
export default randomNumber;
