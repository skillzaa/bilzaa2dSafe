import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();
const a = bilzaa2d.elements.addRectangle();
a.animations.add({valueName: "rotateAngle",algo: "randomNumber",fromSecond:10 , toSecond:20},["x","rotateAngle"]);

const b = bilzaa2d.elements.addRectangle();
b.attributes.setItemProperty("x",300);
b.animations.add({valueName: "x",algo: "linear",fromSecond:10 , toSecond:12},["x"],{valueName: "x","from":0, "to":300});

const c = bilzaa2d.elements.addRectangle();
c.attributes.setItemProperty("y",300);
c.animations.add({valueName: "borderColor",algo: "randomColor",fromSecond:1 , toSecond:10},["borderColor"],{});

const d = bilzaa2d.elements.addRectangle();
d.attributes.setItemProperty("y",300);
d.attributes.setItemProperty("x",300);
d.attributes.setItemProperty("borderWidth",1);
d.animations.add({valueName: "width",algo: "linear",fromSecond:1 , toSecond:10},["width"],{valueName: "width","from":0, "to":300});

d.animations.add({valueName: "drawBorder",algo: "toggle",fromSecond:1 , toSecond:60},["drawBorder"],{valueName: "drawBorder",speed:15});
 


const e = bilzaa2d.elements.addSimpleRectangle();
e.attributes.setItemProperty("y",100);
e.attributes.setItemProperty("fillStyle","blue");
e.attributes.setItemProperty("x",450);



// const f = bilzaa2d.elements.addCircle();
// f.attributes.setValue("x",600);
// f.attributes.setValue("y",200);
// f.attributes.setValue("radius",50);
// f.animations.add({valueName: "y",algo: "linear",fromSecond:10 , toSecond:12},["y"],{valueName: "y","from":200, "to":300});

const g = bilzaa2d.elements.addTriangle();
g.attributes.setItemProperty("fillStyle","orange");
g.attributes.setItemProperty("x",600);
g.attributes.setItemProperty("y",100);

g.animations.add({valueName: "x",algo: "linear",fromSecond:1 , toSecond:20},["x"],{valueName: "x","from":600, "to":100});
    
const t = bilzaa2d.elements.addText();
t.animations.add({valueName: "y",algo: "linear",fromSecond:1 , toSecond:20},["y"],{valueName: "y","from":50, "to":300});

////////////////////////////
const complex = bilzaa2d.elements.addComplex();
////////////////////////////
////////////////////////////
bilzaa2d.play();
