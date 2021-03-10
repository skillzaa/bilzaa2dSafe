export default class SingleVariableBaseAnimation {

constructor(incomming = {}){
 this.valueName = incomming.valueName ;
 this.algo = incomming.algo ; //function nam
this.fromSecond = incomming.fromSecond | 1 ;
this.toSecond = incomming.toSecond | 60 ;
this.from = incomming.from | 10;
this.to = incomming.to | 300;
//-----------------------------------
this.fps = incomming.fps | 60 ;
this.bdReqForAni = [{name : `${this.valueName}`}];

this.deltaPerSecond = this.calculateDeltaPerSecond(this.from,this.to,this.fromSecond,this.toSecond);
this.deltaPerFrame = this.deltaPerSecond/this.fps;
}

animationManipulation(bdReqForAni,currentSecond){
const retArray = this.algorithem(bdReqForAni,currentSecond);   
return retArray;
}
algorithem(bdReqForAni,currentSecond){
    const ret = this[this.algo](bdReqForAni,currentSecond);
    return ret;
}

linear(bdReqForAni,currentSecond){
    bdReqForAni.forEach(element => {
        if(element.name == this.valueName){
            element.value += this.deltaPerFrame ;
        }
    });
return bdReqForAni;;        
}
randomNumber(bdReqForAni,currentSecond){
    bdReqForAni.forEach(element => {
        if(element.name == this.valueName){
            element.value = this.getRandomInt() ;
        }
    });
return bdReqForAni;;        
}
getRandomInt(max=15) {
    return Math.floor(Math.random() * Math.floor(max));
  }
randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

randomColor(bdReqForAni,currentSecond){
    bdReqForAni.forEach(element => {
        if(element.name == this.valueName){
            element.value = this.randomHexColorCode() ;
        }
    });
return bdReqForAni;;        
}
calculateDeltaPerSecond(fromValue,toValue,fromSecond,toSecond){
    const timeDiff = (toSecond - fromSecond).toFixed(0);
    const totalValueDiff = (toValue - fromValue).toFixed(0);
    return totalValueDiff/timeDiff;
}

//...............................................    
}