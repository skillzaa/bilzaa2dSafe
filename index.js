import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();
const a = bilzaa2d.elements.addRectangle();
a.animations.add({attribute: "rotateAngle",algo: "randomNumber",fromSecond:10 , toSecond:20},["x","rotateAngle"]);

const b = bilzaa2d.elements.addRectangle();
b.attributes.setItemProperty("x",300);
b.animations.add({attribute: "x",algo: "linear",fromSecond:10 , toSecond:12},["x"],{attribute: "x","from":0, "to":300});

const c = bilzaa2d.elements.addRectangle();
c.attributes.setItemProperty("y",300);
c.animations.add({attribute: "borderColor",algo: "randomColor",fromSecond:1 , toSecond:10},["borderColor"],{});

const d = bilzaa2d.elements.addRectangle();
d.attributes.setItemProperty("y",300);
d.attributes.setItemProperty("x",300);
d.attributes.setItemProperty("borderWidth",1);
d.animations.add({attribute: "width",algo: "linear",fromSecond:1 , toSecond:10},["width"],{attribute: "width","from":0, "to":300});

d.animations.add({attribute: "drawBorder",algo: "toggle",fromSecond:1 , toSecond:60},["drawBorder"],{attribute: "drawBorder",speed:15});
 


const e = bilzaa2d.elements.addSimpleRectangle();
e.attributes.setItemProperty("y",100);
e.attributes.setItemProperty("fillStyle","blue");
e.attributes.setItemProperty("x",450);



const f = bilzaa2d.elements.addCircle();
f.attributes.setItemProperty("x",600);
f.attributes.setItemProperty("y",200);
f.attributes.setItemProperty("radius",50);
f.animations.add({attribute: "y",algo: "linear",fromSecond:10 , toSecond:12},["y"],{attribute: "y","from":200, "to":300});

const g = bilzaa2d.elements.addTriangle();
g.attributes.setItemProperty("fillStyle","orange");
g.attributes.setItemProperty("x",600);
g.attributes.setItemProperty("y",100);

g.animations.add({attribute: "x",algo: "linear",fromSecond:1 , toSecond:20},["x"],{attribute: "x","from":600, "to":100});
    
const t = bilzaa2d.elements.addText();
t.animations.add({attribute: "y",algo: "linear",fromSecond:1 , toSecond:20},["y"],{attribute: "y","from":50, "to":300});

////////////////////////////
const complex = bilzaa2d.elements.addComplex();
////////////////////////////
////////////////////////////
bilzaa2d.play();
