import Metal from "../metal/Metal.js";

import AnimationSequencesAoo from "../Aoo/AnimationSequencesAoo.js";
import AttributesAoo from "../Aoo/AttributesAoo.js";
export default class BasePrimtive  extends Metal{

constructor(name="Not named",type="basic") {
super();
this.name=name;
this.type = type;
//====AOOs=============
this.animationSequences = new AnimationSequencesAoo();

this.attributes = new AttributesAoo();
//==================================
this.clearCanvas = false;
this.metal = new Metal();
this.fillAttributes();    
}

fillAttributes(){
const basicData = [
        { name : "x",  value : 100, comments:"The X location"},
        { name : "y",  value :100,comments:"The Y location"},
        { name : "width",  value : 100, comments:""},
        { name : "drawBorder",  value  : true, comments:""},
        { name : "borderColor",  value  : "red", comments:""},
        { name : "borderWidth",  value  : 10, comments:""},
        { name : "height",  value : 50, comments:""},
        { name : "rotateClockwise",  value : true, comments:"t/f"},
        { name : "rotateAngle",  value : 0, comments:"the angle at which the obj is currently rotated"},
        { name : "rps",  value : 10, comments:"stands for rotation per sec, 6 = 360 in 1min. 0 = no rotate, this is rotation speed not current rotation angle"},
        { name : "fillStyle",  value : "green", comments:""},
        { name : "strokeStyle",  value : "#F0000", comments:""},
        { name : "shadowColor",  value : "blue", comments:""},
        { name : "shadowBlur",  value : 0, comments:""},
        { name : "shadowOffsetX",  value : 0, comments:""},
        { name : "shadowOffsetY",  value : 0, comments:""},
        ];
basicData.forEach(attr => {
    this.attributes.add(attr);
});       
//console.log(this.attributes); 
}
// addAnimation(animationSequence){
//     this.animationSequences.push(animationSequence);
//     }

setNextFrame(currentSecond){
    if (this.clearCanvas === true){
        this.metal.clearCanvas(); 
        this.clearCanvas === false; //shd this be here?
    }    
//==================LLLLLOOOOPPPPP======================== 
this.animationSequences.data.forEach(animation => {
    //----STEP 1 -- GET DATA FROM ATTRIBUTES COLLECTION
    //filter out not relavant seq here

    //----STEP 2 -- GET DATA FROM ATTRIBUTES COLLECTION
    const elementDataBeingSentToAnimation = this.attributes.getAttributesByName(animation.dataFromElement);
    const retData = animation.animate(elementDataBeingSentToAnimation,currentSecond);
    //----STEP 2 -- SAVE ATTRIBUTES

    this.attributes.saveAttributeValues(retData);//retData is aoo
   // this.attributes.setSingleValue(retData[0].name,retData[0].value);//retData is aoo
    //========================================== 
    });
return true;    
}
///not req just filter out in the setNextFrame;
// getCurrentSequences(currentSecond){
// const seq = [];
//     for (let x = 0; x < this.animationSequences.length; x++) {
    
//     if(this.animationSequences.data[x].fromSecond < currentSecond && this.animationSequences.data[x].toSecond > currentSecond ){
//         seq.push(this.animationSequences.data[x]);  
//     }
// }//for ends
//  if (seq.length > 0){return seq;}else{ return false;}
// }//getCurrentSequence

draw(){
  //  if( === true){
        this.drawBorder();
 //   }
this.drawShape();    
}
////-------------------------------------------
/**every element atleast has 2 componenets .// a border and the shape. we can keep their implementation chaging and adding HOOKS*/
drawBorder(){

} 
drawShape(){} 
////-------------------------------------------
clearCanvas(){
    if (this.clearCanvas === true){
        this.metal.clearCanvas(); 
        this.clearCanvas === false; //shd this be here?
    }    
}
//.................

getBD(name){
for (let idx = 0; idx < this.attributes.data.length; idx++) {
    if(this.attributes.data[idx].name === name){
        return this.attributes.data[idx];
    }
} 
return false;   
}
getBDVal(name){
for (let idx = 0; idx < this.attributes.data.length; idx++) {
    if(this.attributes.data[idx].name === name){
        return this.attributes.data[idx].value;
    }
}
return false;    
}

setBD(name,value){
for (let idx = 0; idx < this.attributes.data.length; idx++) {
    if(this.attributes.data[idx].name === name){
        this.attributes.data[idx].value = value;
        return this.attributes.data[idx];
    }
}        
   
}//......
//////////////////////////classsss-----------------
}