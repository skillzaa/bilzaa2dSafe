import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();
const a = bilzaa2d.element.addRectangle();
a.animationSequences.add({valueName: "rotateAngle",algo: "randomNumber",fromSecond:10 , toSecond:20},["x","rotateAngle"]);

const b = bilzaa2d.element.addRectangle();
b.attributes.setSingleValue("x",300);
b.animationSequences.add({valueName: "x",algo: "linear",fromSecond:10 , toSecond:12},["x"],{valueName: "x","from":0, "to":300});

const c = bilzaa2d.element.addRectangle();
c.attributes.setSingleValue("y",300);
c.animationSequences.add({valueName: "borderColor",algo: "randomColor",fromSecond:1 , toSecond:10},["borderColor"],{});

const d = bilzaa2d.element.addRectangle();
d.attributes.setSingleValue("y",300);
d.attributes.setSingleValue("x",300);
d.attributes.setSingleValue("borderWidth",1);
d.animationSequences.add({valueName: "width",algo: "linear",fromSecond:1 , toSecond:10},["width"],{valueName: "width","from":0, "to":300});

d.animationSequences.add({valueName: "drawBorder",algo: "toggle",fromSecond:1 , toSecond:60},["drawBorder"],{valueName: "drawBorder",speed:15});
 


const e = bilzaa2d.element.addSimpleRectangle();
e.attributes.setSingleValue("y",100);
e.attributes.setSingleValue("fillStyle","blue");
e.attributes.setSingleValue("x",450);



const f = bilzaa2d.element.addCircle();
f.attributes.setValue("x",600);
f.attributes.setValue("y",200);
f.attributes.setValue("radius",50);
f.animationSequences.add({valueName: "y",algo: "linear",fromSecond:10 , toSecond:12},["y"],{valueName: "y","from":200, "to":300});

const g = bilzaa2d.element.addTriangle();
g.attributes.setValue("fillStyle","orange");
g.attributes.setValue("x",600);
g.attributes.setValue("y",100);

g.animationSequences.add({valueName: "x",algo: "linear",fromSecond:1 , toSecond:20},["x"],{valueName: "x","from":600, "to":100});

const t = bilzaa2d.element.addText();
t.animationSequences.add({valueName: "y",algo: "linear",fromSecond:1 , toSecond:20},["y"],{valueName: "y","from":50, "to":300});

////////////////////////////
////////////////////////////
////////////////////////////
bilzaa2d.play();
