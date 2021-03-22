import Metal from "../metal/Metal.js";
import ArrayOfObjects from "../single/ArrayOfObjects.js";
import Animations from "../fasades/Animations.js";

export default class BasePrimtive  extends Metal{

protected attributes:ArrayOfObjects; 
public name:string;
protected animations:Animations; 
protected metal:Metal;
public clearCanvasFlag:boolean;


constructor(name="Element") {          
super();   
this.name=name;
//=============================attributes
this.attributes = new ArrayOfObjects();
//--x,y,width,height--
this.attributes.add({name: "x", value: 100, comments: "The X location" });
this.attributes.add({ name: "y", value: 100, comments: "The Y location" });
this.attributes.add({ name: "width", value: 100, comments: "" });
this.attributes.add({ name: "height", value: 50, comments: "" });
//--Border--
this.attributes.add({ name: "drawBorder", value: true, comments: "" });
this.attributes.add({ name: "borderColor", value: "red", comments: "" });
this.attributes.add({ name: "borderWidth", value: 10, comments: "" });
//--rotation--
this.attributes.add({ name: "rotateClockwise", value: true, comments: "t/f" });
this.attributes.add({ name: "rotateAngle", value: 0, comments: "the angle at which);the obj is currently rotated" });
this.attributes.add({ name: "rps", value: 10, comments: "rotation persec, 6 = 360 in 1min. 0 = no rotate, this is rotation speed not current rotation angle" });
//--colors--
this.attributes.add({ name: "fillStyle", value: "green", comments: "" });
this.attributes.add({ name: "strokeStyle", value: "#F0000", comments: "" });
//--shadows--
this.attributes.add({ name: "shadowColor", value: "blue", comments: "" });
this.attributes.add({ name: "shadowBlur", value: 0, comments: "" });
this.attributes.add({ name: "shadowOffsetX", value: 0, comments: "" });
this.attributes.add({ name: "shadowOffsetY", value: 0, comments: "" });  

//====Animations=============
this.animations = new Animations();

//==================================
this.clearCanvasFlag = false; //first element of the frame has to clean
this.metal = new Metal();   
//--get attrib data into attribute object
 
}

public setNextFrame(currentSecond:number){
    if (this.clearCanvasFlag === true){
        this.metal.clearCanvas(); 
        this.clearCanvasFlag === false; //shd this be here?
    }    
//==================LLLLLOOOOPPPPP======================== 
this.animations.data.forEach(animation => {
    //----STEP 1 -- GET DATA FROM ATTRIBUTES COLLECTION
    //filter out not relavant seq here
    if( (currentSecond > animation.fromSecond)
     && 
     (currentSecond <= animation.toSecond)){
    //----STEP 2 -- GET DATA FROM ATTRIBUTES COLLECTION
    const elementDataBeingSentToAnimation = this.attributes.getItemsByNames(animation.dataRequired);
    //----STEP 3 -- Animate the data
    const retData = animation.animate(elementDataBeingSentToAnimation,currentSecond);
    //----STEP 4 -- SAVE ATTRIBUTES

    this.attributes.insertPropertiesFromArray(retData);//retData is aoo
   
     }/////--filter no relevant animations
    //========================================== 
    });
return true;    
}
draw(){
   
}

//////////////////////////classsss-----------------
}