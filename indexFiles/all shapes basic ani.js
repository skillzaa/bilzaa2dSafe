import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();

//===================================================
const a = bilzaa2d.shapes.addRectangle();
a.attributes.setProperty("backgroundColor" , "red");
a.attributes.setProperty("drawBorder",true);
a.attributes.setProperty("borderWidth",5);
a.attributes.setProperty("dashedBorder",false);
a.attributes.setProperty("transparent",false);
a.animations.add({attribute: "rotateAngle",algo: "randomNumber",fromSecond:10 , toSecond:20},["x","rotateAngle"],{}, {fps:60});
//===================================================
const b = bilzaa2d.shapes.addRectangle();
b.attributes.setProperty("x",300);
b.animations.add({attribute: "x",algo: "linear",fromSecond:10 , toSecond:12},["x"],{attribute: "x","from":0, "to":300 },{fps:60});
//===================================================
const c = bilzaa2d.shapes.addRectangle();
c.attributes.setProperty("y",300);
c.animations.add({attribute: "borderColor",algo: "randomColor",fromSecond:1 , toSecond:10},["borderColor"],{ },{fps:60});

const d = bilzaa2d.shapes.addRectangle();
d.attributes.setProperty("y",300);
d.attributes.setProperty("x",300);
d.attributes.setProperty("dashedBorder",false);
d.attributes.setProperty("borderWidth",1);

d.animations.add({attribute: "width",algo: "linear",fromSecond:1 , toSecond:10},["width"],{attribute: "width",from:0, to:300}  ,{fps:60});

d.animations.add({attribute: "drawBorder",algo: "toggle",fromSecond:1 , toSecond:60},["drawBorder"],{attribute: "drawBorder",speed:15} , {fps:60});
 

const f = bilzaa2d.shapes.addCircle();
f.attributes.setProperty("x",600);
f.attributes.setProperty("y",200);
f.attributes.setProperty("radius",50);
f.animations.add({attribute: "y",algo: "linear",fromSecond:10 , toSecond:12},["y"],{attribute: "y","from":200, "to":300},{fps:60});

const g = bilzaa2d.shapes.addTriangle();
g.attributes.setProperty("fillStyle","orange");
g.attributes.setProperty("x",600);
g.attributes.setProperty("y",100);

g.animations.add({attribute: "x",algo: "linear",fromSecond:1 , toSecond:20},["x"],{attribute: "x","from":600, "to":100},{fps:60});
    
const t = bilzaa2d.shapes.addText();
t.attributes.setProperty("title", "Some thing New");
t.attributes.setProperty("fillStyle", "red");

t.animations.add({attribute: "y",algo: "linear",fromSecond:1 , toSecond:20},["y"],{attribute: "y","from":50, "to":300},{fps:60});

////////////////////////////
const complex = bilzaa2d.shapes.addComplex();
////////////////////////////
////////////////////////////
const ret = bilzaa2d.play();
console.log(ret);
