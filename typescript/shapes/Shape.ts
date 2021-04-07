import Metal from "../metal/Metal.js";
import ArrayOfObjects from "../single/ArrayOfObjects.js";
import AnimationsFasade from "../animations/AnimationsFasade.js";
import IBasePrimtives from "../interfaces/IBasePrimitive.js";
    
export default class Shape  implements IBasePrimtives{
//attributes is instance of class AOO it itsself is not an array. it containssss an array of objects.
public attributes:ArrayOfObjects; 
//public name:string;
protected animations:AnimationsFasade; 
protected metal:Metal;
public clearCanvasFlag:boolean;


constructor(name="Element") {          
   
//=============================attributes
this.attributes = new ArrayOfObjects();
//--The name--
this.attributes.add({name: "name", value: 0 });
//--x,y,width,height--
this.attributes.add({name: "x", value: 100 });
this.attributes.add({ name: "y", value: 100 });
this.attributes.add({ name: "width", value: 100 });
this.attributes.add({ name: "height", value: 50 });


this.attributes.add({ name: "dashSize", value: 5 });
this.attributes.add({ name: "gapBetweenDashes", value: 1 });

//--rotation--
this.attributes.add({ name: "rotateClockwise", value: true, comments: "t/f" });
//---the angle at which);the obj is currently rotated
this.attributes.add({ name: "rotateAngle", value: 0});   
this.attributes.add({ name: "rps", value: 10, comments: "rotation persec, 6 = 360 in 1min. 0 = no rotate, this is rotation speed not current rotation angle" });
//--colors--
this.attributes.add({ name: "backgroundColor", value: "green" });
this.attributes.add({ name: "opacity", value: 1 });//----------???? transparency
this.attributes.add({ name: "strokeStyle", value: "#F0000" });
//--shadows--
this.attributes.add({ name: "shadowColor", value: "grey" });
this.attributes.add({ name: "shadowBlur", value: 10 });
this.attributes.add({ name: "shadowOffsetX", value: 50 });
this.attributes.add({ name: "shadowOffsetY", value: 50 });  
//----title
this.attributes.add({ name: "title", value: "The Title" });  
this.attributes.add({ name: "titleColor", value: "red" });  
this.attributes.add({ name: "titleFontSize", value: 22 });  
this.attributes.add({ name: "titleFontFamily", value: "Arial" });  
this.attributes.add({ name: "titleOpacity", value: 1 });  

//====Animations=============
this.animations = new AnimationsFasade();

//==================================
this.metal = new Metal();   
//--get attrib data into attribute object
 
}


public update(currentSecond:number){
   
//==================LLLLLOOOOPPPPP======================== 
this.animations.data.forEach(animation => {
    //----STEP 1 -- GET DATA FROM ATTRIBUTES COLLECTION
    //filter out not relavant seq here
    if( (currentSecond >= animation.fromSecond)
     && 
     (currentSecond <= animation.toSecond)){
    //----STEP 2 -- GET DATA FROM ATTRIBUTES COLLECTION
    //---get item by name since its one item --a string
    const attributeToAnimateValue = this.attributes.getItem(animation.attributeToAnimateName).value;

    const readOnlyElementData = this.attributes.getItemsByNames(animation.readOnlyElementAttrNames);
    //----STEP 3 -- Animate the data
    const retValue = animation.animate(attributeToAnimateValue,currentSecond,readOnlyElementData);
    //----STEP 4 -- SAVE ATTRIBUTES

    this.attributes.setProperty(animation.attributeToAnimateName,retValue);//retData is aoo
   
     }/////--filter no relevant animations
    //========================================== 
    });
return true;    
}
preDraw(){
   
}
draw(){
   
}
postDraw(){
   
}


setAttr(attrName:string,attrValue:string|number|boolean){
return this.attributes.setProperty(attrName , attrValue);
}

getAttr(attrName:string){
    return this.attributes.getProperty(attrName);
    }
    
//////////////////////////classsss-----------------
}