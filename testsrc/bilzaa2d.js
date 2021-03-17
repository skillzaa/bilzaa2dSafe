'use strict';

/**The app can have 2 states wrt time. One is running state and other paused. both cases are to be dealt with seperately. during running the time is calculated by the difference between time now ans start time. on the other hand during pause the time is placed in side oldTime and can be managed from there. when resumend this old time is subtracted from the startTime (this oldTime is the time which the animation has run before resume to we need to add that).
 * similarly for forward and rewind also we have to treat both states seperately.
*/

class PlayHead {
//class PlayHead {
constructor(duration=100000) {
this.duration = duration; 
this.oldTime = 0;
this.paused = true;
this.startTime = 0;  

}

runningTime(){  
    if (this.paused === false){
        return (Date.now() - this.startTime);
     }else {
        return this.oldTime;
    }
}

play(){
    if(this.paused === true){//cant be repeated w/o stop
        this.startTime = (Date.now() - this.oldTime);
        this.oldTime = 0;
        this.paused = false;
       }       
}
pause(){
    if(this.paused === false){ // so playinh now will pause
        this.oldTime = Date.now() - this.startTime;//store time
        this.startTime = 0;
        this.paused = true;
       }   
}
stop(){ 
        this.oldTime = 0; //since its start so old time is gone
        this.startTime = 0;
        this.paused = true;  
}

resume(){
    this.play();
  }
forward(ms=5000){  // .
    let oldPause = false;
if(this.paused === true){oldPause = true;}    
this.pause();
if(this.oldTime + ms < this.duration){
    this.oldTime = this.oldTime + ms;
}  

if (oldPause == false){this.play();}
}

rewind(ms=5000){// in rwd subtract from startTime
    let oldPause = false;
    if(this.paused === true){oldPause = true;}  
this.pause();
if(this.oldTime - ms > 0){
    this.oldTime = this.oldTime - ms;
}    
if (oldPause == false){this.play();}
     
}

//////////////////////////classsss-----------------
}

class Metal {

constructor() {
 this.load();
}
//....................
load(canvasName = "bilzaaCanvas"){
    
    try {
        this.canvas = document.getElementById(canvasName);
        this.ctx = this.canvas.getContext('2d');
        this.ctx.canvas.width  = window.innerWidth;
        this.ctx.canvas.height = window.innerHeight;    
      }
      catch(err) {
        return false;
      }
}
//....................
clear(){
this.ctx.fillStyle = "#f5ecc3";
//clear the canvas
this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
}//fn
clearCanvas(fillStyle = "#e9f7f2"){
this.ctx.fillStyle = fillStyle;
//clear the canvas
this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);
}//fn

drawRectangle(x=10,y=10,width=100,height = 100){
    this.ctx.fillStyle = "red";
this.ctx.fillRect(x, y, width, height);
this.ctx.strokeRect(x+50, y+50, width, height);
}
drawRectangleBorder(x, y, width, height, fillStyle='#000',thickness = 1)
{
  this.ctx.fillStyle= fillStyle;
  this.ctx.fillRect(x - (thickness), y - (thickness), width + (thickness * 2), height + (thickness * 2));
  this.ctx.fillRect(x - (thickness), y - (thickness), width + (thickness * 2), height + (thickness * 2));
}

drawCircle(x,y,radius){
  this.ctx.beginPath();
this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
this.ctx.stroke();
}
drawTriangle(x,y,width,height,fillStyle){
  this.ctx.fillStyle = fillStyle;
  this.ctx.beginPath();
  this.ctx.moveTo(x,y+height);
  this.ctx.lineTo(x+width,y+height);
  this.ctx.lineTo(x+width/2,y);
  this.ctx.fill();
}

drawText(title,x,y){
this.ctx.fillStyle = "red";
this.ctx.font = "20px Georgia";
this.ctx.fillText(title, x, y);
}
//////////////////////////classsss-----------------
}

const linear = function(bdReqForAni,currentSecond){
    const timeDiff = parseInt((this.toSecond - this.fromSecond));
   const totalValueDiff = parseInt((this.argsForAlgo.to - this.argsForAlgo.from));
   this.deltaPerSecond = totalValueDiff / timeDiff;  
   this.deltaPerFrame = this.deltaPerFrame = this.deltaPerSecond/this.fps;
   
   //------------    
   bdReqForAni.forEach(attributre => {
    if(attributre.name == this.valueName){
        attributre.value += this.deltaPerFrame ;
    }
});
   return bdReqForAni;   };

const randomNumber = function(bdReqForAni,currentSecond){
    bdReqForAni.forEach(attributre => {
        if(attributre.name == this.valueName){
            attributre.value = getRandomInt() ;
        }
    });
return bdReqForAni;};
function getRandomInt(max=15) {
    return Math.floor(Math.random() * Math.floor(max));
  }

const randomColor = function(bdReqForAni,currentSecond){
    bdReqForAni.forEach(element => {
        if(element.name == this.valueName){
            element.value = randomHexColorCode() ;
        }
    });
return bdReqForAni;};
function randomHexColorCode () {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  }

const blink = function(bdReqForAni,currentSecond){
    if(typeof this.future.counter == "undefined"){
        this.future.counter = 0; 
    }else {
        this.future.counter++;
    }
//-----------------------    
    bdReqForAni.forEach(element => {
        if((element.name == this.valueName) && this.future.counter > this.argsForAlgo.speed){
            this.future.counter =0;
            if(element.value === true){
                element.value = false;
            }else {
                element.value = true;
            }
        }
    });
return bdReqForAni;};

class Algorithms {
constructor(){

}
getAlgo(name){
let a;    
    switch (name) {
        case "linear":
            return linear;  
        case "randomNumber":
            return randomNumber;  
        case "randomColor":
            return randomColor;  
        case "toggle":
            return blink;  
    }
    return a;    
}
}

class SingleVariableBaseAnimation {
constructor(compulsary,dataFromElement=[],argsForAlgo={},future={}){
//--------------------ALGO FASADE---------------      
    this.algorithms = new Algorithms();
//--------------------COMPULSARY ITEMS---------------    
 this.valueName = compulsary.valueName ;
 this.fromSecond = compulsary.fromSecond  ;
 this.toSecond = compulsary.toSecond ;
 this.algo = this.algorithms.getAlgo(compulsary.algo) ; 
 //-----------------------------------
 this.dataFromElement = dataFromElement;
 this.future = future;
 this.argsForAlgo = argsForAlgo;
 //-----------------------------------
 this.fps =  60 ;
 
}
animate(animationData,currentSecond){
const ret = this.algo(animationData,currentSecond);
//    const ret = this[this.algo](animationData,currentSecond);
    return ret;
// const retArray = this.algorithem(animationData,currentSecond);   
// return retArray;
}
//===============================================

//...............................................    
}

class AooBase{    
constructor(){
    this.data=[];
}
add(){

} 
push(a){
return this.data.push(a);
}
get length(){
return this.data.length;
}

getItem(name){
for (let idx = 0; idx < this.data.length; idx++) {
    if(this.data[idx].name === name){
        return this.data[idx];
    }
} 
return false;   
}//.....................

getItemValue(name){
for (let idx = 0; idx < this.data.length; idx++) {
    if(this.data[idx].name === name){
        return this.data[idx].value;
    }
}
return false;    
}

setValue(name,value){
    for (let idx = 0; idx < this.data.length; idx++) {
        if(this.data[idx].name === name){
            this.data[idx].value = value;
            return this.data[idx];
        }
    }        
       
    }//......

setSingleValue(name,value){
    this.data.forEach(bd => {
            if(name === bd.name){
                bd.value = value;
            }
    });
  
return true;    
}//..

///////////////////
}

class animationSequencesAoo extends AooBase{    
constructor(){
super();//the data array is in baseclass
}
add(compulsary,dataFromElement=[],argsForAlgo={},future={}){
const aniSeq = new SingleVariableBaseAnimation(compulsary,dataFromElement,argsForAlgo,future);
this.data.push(aniSeq);    
return true;
} 

//---------------------------------
}

class AttributesAoo extends AooBase{    
constructor(){
super();
}
add(incomming = {}){
this.data.push(incomming);
return incomming;
} 
saveAttributeValues(retData){
    this.data.forEach(bd => {
        retData.forEach(ag => {
            if(ag.name == bd.name){
                bd.value = ag.value;
            }
        });
    });
  
return true;    
}//..

getAttributesByName(argumentsRequired=[]){
/**incooming is normal [] where as attributes is an obj wrapped around an aOO */    
const ret = [];    
this.data.forEach(bd => {
    argumentsRequired.forEach(ag => {
        if(ag == bd.name){
            ret.push(bd);
        }
    });
});
return ret;    
}
    
// add(name="x",value=10,type="number"){
// const a = {};
// a.name= name;
// a.value= value;
// a.type= type;
// this.data.push(a);
// return a;
// }
//---------------------------------
}

class BasePrimtive  extends Metal{

constructor(name,attribData) {
super();
this.name=name;
//====AOOs=============
this.animationSequences = new animationSequencesAoo();

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
    //----STEP 3 -- Animate the data
    const retData = animation.animate(elementDataBeingSentToAnimation,currentSecond);
    //----STEP 4 -- SAVE ATTRIBUTES

    this.attributes.saveAttributeValues(retData);//retData is aoo
   // this.attributes.setSingleValue(retData[0].name,retData[0].value);//retData is aoo
     }/////--filter no relevant animations
    //========================================== 
    });
return true;    
}
draw(){
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

class Rectangle extends BasePrimtive {
  constructor() {
    const attribData = [
      { name: "x", value: 100, comments: "The X location" },
      { name: "y", value: 100, comments: "The Y location" },
      { name: "width", value: 100, comments: "" },
      { name: "drawBorder", value: true, comments: "" },
      { name: "borderColor", value: "red", comments: "" },
      { name: "borderWidth", value: 10, comments: "" },
      { name: "height", value: 50, comments: "" },
      { name: "rotateClockwise", value: true, comments: "t/f" },
      { name: "rotateAngle", value: 0, comments: "the angle at which the obj is currently rotated" },
      { name: "rps", value: 10, comments: "stands for rotation per sec, 6 = 360 in 1min. 0 = no rotate, this is rotation speed not current rotation angle" },
      { name: "fillStyle", value: "green", comments: "" },
      { name: "strokeStyle", value: "#F0000", comments: "" },
      { name: "shadowColor", value: "blue", comments: "" },
      { name: "shadowBlur", value: 0, comments: "" },
      { name: "shadowOffsetX", value: 0, comments: "" },
      { name: "shadowOffsetY", value: 0, comments: "" },
    ];
    const name = "Rectangle";
    super(name, attribData);
  }

  drawShape() {
if(this.attributes.getItemValue("drawBorder") === true){
  this.drawBorder();
}

    this.ctx.fillStyle = this.attributes.getItem("fillStyle").value;
    this.ctx.strokeStyle = this.attributes.getItem("strokeStyle").value;
    this.ctx.shadowColor = this.attributes.getItem("shadowColor").value;
    this.ctx.shadowBlur = this.attributes.getItem("shadowBlur").value;
    this.ctx.shadowOffsetX = this.attributes.getItem("shadowOffsetX").value;
    this.ctx.shadowOffsetY = this.attributes.getItem("shadowOffsetY").value;
    if (this.attributes.getItemValue("rps") > 0) {
      this.ctx.save();
      this.ctx.translate(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2), this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2));
      this.ctx.rotate((this.attributes.getItem("rotateAngle").value) * Math.PI / 180);
      this.ctx.translate(-(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2)), -(this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2)));

    }

    this.ctx.fillRect(this.attributes.getItem("x").value, this.attributes.getItem("y").value, this.attributes.getItem("width").value, this.attributes.getItem("height").value);

    if (this.attributes.getItemValue("rps") > 0) {
      this.ctx.restore();
    }
    //--the draw function
  }

  drawBorder() {
    //if(this.attributes.getItemValue("rps") > 0){console.log("totating border");}
    if (this.attributes.getItemValue("rps") > 0) {
      this.ctx.save();
      this.ctx.translate(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2), this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2));
      this.ctx.rotate((this.attributes.getItem("rotateAngle").value) * Math.PI / 180);
      this.ctx.translate(-(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2)), -(this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2)));

    }

    this.drawRectangleBorder(this.attributes.getItem("x").value, this.attributes.getItem("y").value, this.attributes.getItem("width").value, this.attributes.getItem("height").value, this.attributes.getItem("borderColor").value, this.attributes.getItem("borderWidth").value);
    if (this.attributes.getItemValue("rps") > 0) {
      this.ctx.restore();
    }

    //----------------------------    
  }//--draw border   
  //////////////////////////classsss-----------------
}

class SimpleRectangle extends BasePrimtive {
  constructor() {
    const attribData = [
      { name: "x", value: 100, comments: "The X location" },
      { name: "y", value: 100, comments: "The Y location" },
      { name: "width", value: 100, comments: "" },
      { name: "height", value: 50, comments: "" },
      { name: "rotateClockwise", value: true, comments: "t/f" },
      { name: "rotateAngle", value: 0, comments: "the angle at which the obj is currently rotated" },
      { name: "rps", value: 10, comments: "stands for rotation per sec, 6 = 360 in 1min. 0 = no rotate, this is rotation speed not current rotation angle" },
      { name: "fillStyle", value: "green", comments: "" },
      { name: "strokeStyle", value: "#F0000", comments: "" },
      { name: "shadowColor", value: "blue", comments: "" },
      { name: "shadowBlur", value: 0, comments: "" },
      { name: "shadowOffsetX", value: 0, comments: "" },
      { name: "shadowOffsetY", value: 0, comments: "" },
    ];
    const name = "Rectangle";
    super(name, attribData);
  }

  drawShape() {


    this.ctx.fillStyle = this.attributes.getItem("fillStyle").value;
    this.ctx.strokeStyle = this.attributes.getItem("strokeStyle").value;
    this.ctx.shadowColor = this.attributes.getItem("shadowColor").value;
    this.ctx.shadowBlur = this.attributes.getItem("shadowBlur").value;
    this.ctx.shadowOffsetX = this.attributes.getItem("shadowOffsetX").value;
    this.ctx.shadowOffsetY = this.attributes.getItem("shadowOffsetY").value;
    if (this.attributes.getItemValue("rps") > 0) {
      this.ctx.save();
      this.ctx.translate(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2), this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2));
      this.ctx.rotate((this.attributes.getItem("rotateAngle").value) * Math.PI / 180);
      this.ctx.translate(-(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2)), -(this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2)));

    }

    this.ctx.fillRect(this.attributes.getItem("x").value, this.attributes.getItem("y").value, this.attributes.getItem("width").value, this.attributes.getItem("height").value);

    if (this.attributes.getItemValue("rps") > 0) {
      this.ctx.restore();
    }
    //--the draw function
  }

  drawBorder() {
  }//--draw border   
  //////////////////////////classsss-----------------
}

class Circle extends BasePrimtive {
  constructor() {
    const name = "Circle";      
    const attribData = [
      { name: "x", value: 100, comments: "The X location" },
      { name: "y", value: 100, comments: "The Y location" },
      { name: "radius", value: 100, comments: "" },
      { name: "drawBorder", value: true, comments: "" },
      { name: "borderColor", value: "red", comments: "" },
      { name: "borderWidth", value: 10, comments: "" },
      { name: "rotateClockwise", value: true, comments: "t/f" },
      { name: "rotateAngle", value: 0, comments: "the angle at which the obj is currently rotated" },
      { name: "rps", value: 10, comments: "stands for rotation per sec, 6 = 360 in 1min. 0 = no rotate, this is rotation speed not current rotation angle" },
      { name: "fillStyle", value: "green", comments: "" },
      { name: "strokeStyle", value: "#F0000", comments: "" },
      { name: "shadowColor", value: "blue", comments: "" },
      { name: "shadowBlur", value: 0, comments: "" },
      { name: "shadowOffsetX", value: 0, comments: "" },
      { name: "shadowOffsetY", value: 0, comments: "" },
    ];
    
    super(name, attribData);
  }

drawShape() {
    if(this.attributes.getItemValue("drawBorder") === true){
    this.drawBorder();
    }
this.metal.drawCircle(this.attributes.getItemValue("x"),this.attributes.getItemValue("y"),this.attributes.getItemValue("radius"));    
}

//---------------------------------------  
  drawBorder() {
    this.metal.drawCircle(this.attributes.getItemValue("x"),this.attributes.getItemValue("y"),this.attributes.getItemValue("radius")+10);  
    //----------------------------    
  }//--draw border   
  //////////////////////////classsss-----------------
}

class Triangle extends BasePrimtive {
  constructor() {
    const name = "Triangle";      
    const attribData = [
      { name: "x", value: 100, comments: "The X location" },
      { name: "y", value: 100, comments: "The Y location" },
      { name: "width", value: 100, comments: "" },
      { name: "height", value: 100, comments: "" },
      { name: "drawBorder", value: true, comments: "" },
      { name: "borderColor", value: "red", comments: "" },
      { name: "borderWidth", value: 10, comments: "" },
      { name: "rotateClockwise", value: true, comments: "t/f" },
      { name: "rotateAngle", value: 0, comments: "the angle at which the obj is currently rotated" },
      { name: "rps", value: 10, comments: "stands for rotation per sec, 6 = 360 in 1min. 0 = no rotate, this is rotation speed not current rotation angle" },
      { name: "fillStyle", value: "green", comments: "" },
      { name: "strokeStyle", value: "#F0000", comments: "" },
      { name: "shadowColor", value: "blue", comments: "" },
      { name: "shadowBlur", value: 0, comments: "" },
      { name: "shadowOffsetX", value: 0, comments: "" },
      { name: "shadowOffsetY", value: 0, comments: "" },
    ];
    
    super(name, attribData);
  }

drawShape() {
    if(this.attributes.getItemValue("drawBorder") === true){
    this.drawBorder();
    }
this.metal.drawTriangle(this.attributes.getItemValue("x"),this.attributes.getItemValue("y"),this.attributes.getItemValue("width"),this.attributes.getItemValue("height"),this.attributes.getItemValue("fillStyle"));    
//this.metal.drawCircle(this.attributes.getItemValue("x"),this.attributes.getItemValue("y"),this.attributes.getItemValue("radius"));    
}

//---------------------------------------  
  drawBorder() {
   
    //----------------------------    
  }//--draw border   
  //////////////////////////classsss-----------------
}

class Text extends BasePrimtive {
  constructor() {
    const name = "Text";      
    const attribData = [
      { name: "title", value: "In the Name of Allah", comments: "" },
      { name: "x", value: 100, comments: "The X location" },
      { name: "y", value: 100, comments: "The Y location" },
      { name: "width", value: 100, comments: "" },
      { name: "height", value: 100, comments: "" },
      { name: "drawBorder", value: true, comments: "" },
      { name: "borderColor", value: "red", comments: "" },
      { name: "borderWidth", value: 10, comments: "" },
      { name: "rotateClockwise", value: true, comments: "t/f" },
      { name: "rotateAngle", value: 0, comments: "the angle at which the obj is currently rotated" },
      { name: "rps", value: 10, comments: "stands for rotation per sec, 6 = 360 in 1min. 0 = no rotate, this is rotation speed not current rotation angle" },
      { name: "fillStyle", value: "green", comments: "" },
      { name: "strokeStyle", value: "#F0000", comments: "" },
      { name: "shadowColor", value: "blue", comments: "" },
      { name: "shadowBlur", value: 0, comments: "" },
      { name: "shadowOffsetX", value: 0, comments: "" },
      { name: "shadowOffsetY", value: 0, comments: "" },
    ];
    
    super(name, attribData);
  }

drawShape() {
    if(this.attributes.getItemValue("drawBorder") === true){
    this.drawBorder();
    }
    this.metal.drawText(this.attributes.getItemValue("title"),this.attributes.getItemValue("x"),this.attributes.getItemValue("y"));
//this.metal.drawTriangle(this.attributes.getItemValue("x"),this.attributes.getItemValue("y"),this.attributes.getItemValue("width"),this.attributes.getItemValue("height"),);    
//this.metal.drawCircle(this.attributes.getItemValue("x"),this.attributes.getItemValue("y"),this.attributes.getItemValue("radius"));    
}

//---------------------------------------  
  drawBorder() {
   
    //----------------------------    
  }//--draw border   
  //////////////////////////classsss-----------------
}

class Element{
constructor(){
this.shapes = [];
}
addRectangle(){
    const rectangle = new Rectangle();
    this.shapes.push(rectangle);
    return rectangle;
}
addCircle(){
    const circle = new Circle();
    this.shapes.push(circle);
    return circle;
}
addText(){
    const text = new Text();
    this.shapes.push(text);
    return text;
}
addTriangle(){
    const triangle = new Triangle();
    this.shapes.push(triangle);
    return triangle;
}
addSimpleRectangle(){
    const simpleRectangle = new SimpleRectangle();
    this.shapes.push(simpleRectangle);
    return simpleRectangle;
}


}

class Animations {
constructor(){
}
addNew(incomming={}){
return new SingleVariableBaseAnimation(incomming);
}
//...............................................    
}

const leftCurtain = function(element,args={}){
const local = {};    
const left = element.addSimpleRectangle();


local.fillStyle  = ifDefined(args,"fillStyle","#3c544b");left.attributes.setSingleValue("fillStyle",local.fillStyle);

local.x  =  args.fillStyle |   0; 
local.x  = ifDefined(args,"x",0);left.attributes.setSingleValue("x",local.x);

local.y  = ifDefined(args,"y",0);
local.height  = ifDefined(args,"height",600);left.attributes.setSingleValue("height",local.height);

local.width  = ifDefined(args,"width",0);left.attributes.setSingleValue("width",local.width);


local.fromSecond  =    2; 
local.toSecond  =    3; 
local.from  =   3; 
local.to  =   3; 

left.animationSequences.add({valueName: "width",algo: "linear",fromSecond:[local.fromSecond] , toSecond: [local.toSecond]},["width"],{valueName: "width","from":args.from, "to":args.to});
return element;
};
//----------------------- 

const ifDefined = function (args ,item,alternative){
    if(args.hasOwnProperty(item)){
        return args[item];
    }else {
        return alternative;
    }

};

class Premades{
constructor(){

}
get(name,element,args={}){
    switch (name) {
        case "leftCurtain":
            element = leftCurtain(element,args);    
            break;
    }
return element;    
}
//-----------------------    
}

class Bilzaa2d {
constructor() {
    this.premades = new Premades();
    this.playHead = new PlayHead();
   this.element = new Element();
   this.animations = new Animations();
}
play(){
this.playHead.play(); 
this.animationLoop();
}
animationLoop(){
//first element of the frame being drawn has to clear the canvas    
 this.element.shapes[0].clearCanvas = true;

this.element.shapes.forEach(item => {
    const curSec = this.playHead.currentSecond;
            item.setNextFrame(curSec);
            item.draw(curSec);
        });
window.requestAnimationFrame(this.animationLoop.bind(this));  
}//play
ok(){return 6;}
//////////////////////////////////////////////
}//class

module.exports = Bilzaa2d;
