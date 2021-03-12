import Metal from "../metal/Metal.js";

import AnimationSequencesAoo from "../Aoo/AnimationSequencesAoo.js";
import AttributesAoo from "../Aoo/AttributesAoo.js";
export default class BasePrimtive  extends Metal{

constructor(name,attribData) {
super();
this.name=name;
//====AOOs=============
this.animationSequences = new AnimationSequencesAoo();

this.attributes = new AttributesAoo();
attribData.forEach(attr => {
    this.attributes.add(attr);
});       
//==================================
this.clearCanvas = false; //first element of the frame has to clean
this.metal = new Metal();
//--get attrib data into attribute object
 
}

setNextFrame(currentSecond){
    if (this.clearCanvas === true){
        this.metal.clearCanvas(); 
        this.clearCanvas === false; //shd this be here?
    }    
//==================LLLLLOOOOPPPPP======================== 
this.animationSequences.data.forEach(animation => {
    //----STEP 1 -- GET DATA FROM ATTRIBUTES COLLECTION
    //filter out not relavant seq here
    if( (currentSecond > animation.fromSecond)
     && 
     (currentSecond <= animation.toSecond)){
    //----STEP 2 -- GET DATA FROM ATTRIBUTES COLLECTION
    const elementDataBeingSentToAnimation = this.attributes.getAttributesByName(animation.dataFromElement);
    const retData = animation.animate(elementDataBeingSentToAnimation,currentSecond);
    //----STEP 2 -- SAVE ATTRIBUTES

    this.attributes.saveAttributeValues(retData);//retData is aoo
   // this.attributes.setSingleValue(retData[0].name,retData[0].value);//retData is aoo
     }/////--filter no relevant animations
    //========================================== 
    });
return true;    
}
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
//.........................................................
//.........................................................
//.........................................................
//.........................................................




//////////////////////////classsss-----------------
}