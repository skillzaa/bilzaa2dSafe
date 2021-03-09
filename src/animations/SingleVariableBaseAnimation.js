import BaseAnimation from "./BaseAnimation.js";
export default class SingleVariableBaseAnimation extends BaseAnimation {
constructor(fps=60,valueName,from,to,fromSecond,toSecond){
    super("rotate","basic");
 this.fps = fps;
 this.fromSecond = fromSecond;
 this.toSecond = toSecond;
 this.valueName = valueName; //keep it out of dbreqforani
 
 this.deltaPerSecond = this.calculateDeltaPerSecond(from,to,fromSecond,toSecond);
this.deltaPerFrame = this.deltaPerSecond/this.fps;
this.bdReqForAni = [{name: `${valueName}`}];
 this.comments = "This object is template for one variable animation system.";
}
animationManipulation(bdReqForAni,currentSecond){
const retArray = this.algorithem(bdReqForAni,currentSecond);   
return retArray;
}
algorithem(bdReqForAni,currentSecond){
    const ret = this.linear(bdReqForAni,currentSecond);
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
//...............................................    
}