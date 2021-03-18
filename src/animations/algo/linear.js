const linear = function (bdReqForAni, currentSecond) {
    const timeDiff = parseInt((this.toSecond - this.fromSecond));
    const totalValueDiff = parseInt((this.argsForAlgo.to - this.argsForAlgo.from));
    this.deltaPerSecond = totalValueDiff / timeDiff;
    this.deltaPerFrame = this.deltaPerFrame = this.deltaPerSecond / this.fps;
    //------------    
    bdReqForAni.forEach(attributre => {
        if (attributre.name == this.valueName) {
            attributre.value += this.deltaPerFrame;
        }
    });
    return bdReqForAni;
    ;
};
export default linear;
