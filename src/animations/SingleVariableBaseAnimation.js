export default class SingleVariableBaseAnimation {

//constructor(valueName,fromSecond,toSecond, algo, opt={}){
constructor(compulsary,dataFromElement=[],argsForAlgo={},future={}){
 this.valueName = compulsary.valueName ;
 this.fromSecond = compulsary.fromSecond  ;
 this.toSecond = compulsary.toSecond ;
 this.algo = compulsary.algo ; 
//-----------------------------------
this.dataFromElement = dataFromElement;
this.future = future;
this.argsForAlgo = argsForAlgo;
//-----------------------------------
this.fps =  60 ;
//this.animationData = [{name : `${this.valueName}`}];
this.animationData = this.getAnimationData();
console.log("animation data",this.animationData);

}
getAnimationData(){
//animation data [simple array] is the array of attributes that is sent to the element and that send back these attributes.
    const a = [];
    a.push(this.valueName);
    this.dataFromElement.forEach(d => {
        a.push(d);
    });
return a;    
}
animate(animationData,currentSecond){
const retArray = this.algorithem(animationData,currentSecond);   
return retArray;
}
algorithem(animationData,currentSecond,){
    const ret = this[this.algo](animationData,currentSecond);
    return ret;
}
calculateDeltaPerSecond(fromValue,toValue,fromSecond,toSecond){
    const timeDiff = (toSecond - fromSecond).toFixed(0);
    const totalValueDiff = (toValue - fromValue).toFixed(0);
    return totalValueDiff/timeDiff;
}
deltaPerSecond(){
    //this.deltaPerSecond = this.calculateDeltaPerSecond(this.from,this.to,this.fromSecond,this.toSecond);
}
deltaPerFrame(){
    //this.deltaPerFrame = this.deltaPerSecond/this.fps;
}
//===============================================
//===============================================
//===============================================
//===============================================

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

//...............................................    
}