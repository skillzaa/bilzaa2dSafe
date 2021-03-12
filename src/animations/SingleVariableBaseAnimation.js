import Algorithms from "./algo/Algorithms.js";

export default class SingleVariableBaseAnimation {

//constructor(valueName,fromSecond,toSecond, algo, opt={}){
constructor(compulsary,dataFromElement=[],argsForAlgo={}){
    this.algorithms = new Algorithms();
//-----------------------------------    
 this.valueName = compulsary.valueName ;
 this.fromSecond = compulsary.fromSecond  ;
 this.toSecond = compulsary.toSecond ;
 this.algo = this.algorithms.getAlgo(compulsary.algo) ; 
 //-----------------------------------
 this.dataFromElement = dataFromElement;
 this.argsForAlgo = argsForAlgo;
 //-----------------------------------
 this.fps =  60 ;
 //This is a simple array not an aoo
 //this.animationData = this.getAnimationData();
// this.algo = this.algorithms.getAlgo(this.) ; 
//console.log("animation data",this.animationData);

}
getAnimationData(){
//animation data [simple array] is the array of attributes that is sent to the element and that send back these attributes.
    const a = [];
   // a.push(this.valueName);
    this.dataFromElement.forEach(d => {
        a.push(d);
    });
return a;    
}
animate(animationData,currentSecond){
const ret = this.algo(animationData,currentSecond);
//    const ret = this[this.algo](animationData,currentSecond);
    return ret;
// const retArray = this.algorithem(animationData,currentSecond);   
// return retArray;
}
//===============================================
//===============================================
//===============================================
//===============================================

// linear(bdReqForAni,currentSecond){
//  const timeDiff = parseInt((this.toSecond - this.fromSecond));
// const totalValueDiff = parseInt((this.argsForAlgo.to - this.argsForAlgo.from));
// this.deltaPerSecond = totalValueDiff / timeDiff;  
// this.deltaPerFrame = this.deltaPerFrame = this.deltaPerSecond/this.fps;

// //------------    
//     bdReqForAni.forEach(element => {
//         if(element.name == this.valueName){
//             element.value += this.deltaPerFrame;
//         }
//     });
// return bdReqForAni;;        
// }
// randomNumber(bdReqForAni,currentSecond){
//     bdReqForAni.forEach(element => {
//         if(element.name == this.valueName){
//             element.value = this.getRandomInt() ;
//         }
//     });
// return bdReqForAni;;        
// }
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