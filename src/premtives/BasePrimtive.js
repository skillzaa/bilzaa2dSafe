import Metal from "../metal/Metal.js";

export default class BasePrimtive  extends Metal{

constructor(name="Not named",type="basic") {
    super();
    this.name=name;
    this.type = type;
    this.animationSequences = [];
    this.elementData = {};
    this.basicData = [
    { name : "x",  value : 100, comments:"The X location"},
    { name : "y",  value :100,comments:"The Y location"},
    { name : "width",  value : 100, comments:""},
    { name : "drawBorder",  value  : true, comments:""},
    { name : "borderColor",  value  : "red", comments:""},
    { name : "height",  value : 50, comments:""},
    { name : "fillStyle",  value : "green", comments:""},
    { name : "strokeStyle",  value : "#F0000", comments:""},
    { name : "shadowColor",  value : "blue", comments:""},
    { name : "shadowBlur",  value : 4, comments:""},
    { name : "shadowOffsetX",  value : 4, comments:""},
    { name : "shadowOffsetY",  value : 4, comments:""},
    ];
}

addAnimation(animationSequence){
this.animationSequences.push(animationSequence);
}
setNextFrame(){
    this.animationSequences.forEach(animation => {
const bdReqForAni = this.getbdReqForAni(animation.bdReqForAni);
const retData = animation.animationManipulation(bdReqForAni);
this.absorbBDReqForAni(retData);
    });
return true;    
}
absorbBDReqForAni(retData){
    this.basicData.forEach(bd => {
        retData.forEach(ag => {
            if(ag.name == bd.name){
                bd.value = ag.value;
            }
        });
    });
console.log(this.basicData);    
return true;    
}//..

getbdReqForAni(argumentsRequired=[]){
const ret = [];    
this.basicData.forEach(bd => {
    argumentsRequired.forEach(ag => {
        if(ag.name == bd.name){
            ret.push(bd);
        }
    });
});
return ret;    
}


getCurrentSequences(currentSecond){
const seq = [];
    for (let x = 0; x < this.animationSequences.length; x++) {
    
    if(this.animationSequences[x].startTime < currentSecond && this.animationSequences[x].endTime > currentSecond ){
        seq.push(this.animationSequences[x]);  
    }
}//for ends
 if (seq.length > 0){return seq;}else{ return false;}
}//getCurrentSequence

draw(){
    // if(this.basicData.drawBorder === true){
    //     this.drawWithBorder();
    // }else {
    //     this.drawWithoutBorder();
    // }
this.drawWithoutBorder();    
}

drawWithoutBorder(){
    
}
drawWithBorder(){

}
editBasicData(itemName, itemValue=""){
    this.basicData[itemName] = itemValue;
}
getBD(name){
for (let idx = 0; idx < this.basicData.length; idx++) {
    if(this.basicData[idx].name === name){
        return this.basicData[idx];
    }
}    
}

setBD(name,value){
for (let idx = 0; idx < this.basicData.length; idx++) {
    if(this.basicData[idx].name === name){
        this.basicData[idx].value = value;
        return this.basicData[idx];
    }
}        
   
}//......

//////////////////////////classsss-----------------
}