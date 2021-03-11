export default class SingleVariableBaseAnimation {

constructor(incomming= {}){
 this.valueName = incomming.valueName ;
 this.algo = incomming.algo ; 
this.fromSecond = incomming.fromSecond  ;
this.toSecond = incomming.toSecond ;
this.from = incomming.from;
this.to = incomming.to;
//-----------------------------------
this.fps =  60 ;
this.animationData = [{name : `${this.valueName}`}];

this.deltaPerSecond = this.calculateDeltaPerSecond(this.from,this.to,this.fromSecond,this.toSecond);
this.deltaPerFrame = this.deltaPerSecond/this.fps;
}

animate(animationData,currentSecond){
const retArray = this.algorithem(animationData,currentSecond);   
return retArray;
}
algorithem(animationData,currentSecond){
    const ret = this[this.algo](animationData,currentSecond);
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