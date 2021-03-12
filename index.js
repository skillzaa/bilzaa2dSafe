import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();
const a = bilzaa2d.element.addRectangle();
a.animationSequences.add({valueName: "rotateAngle",algo: "randomNumber",fromSecond:1 , toSecond:60},["x","rotateAngle"]);

const b = bilzaa2d.element.addRectangle();
b.attributes.setSingleValue("x",300);
b.animationSequences.add({valueName: "x",algo: "linear",fromSecond:1 , toSecond:60},["x"],{valueName: "x","from":0, "to":300,fromSecond:1 , toSecond:60});

const c = bilzaa2d.element.addRectangle();
c.attributes.setSingleValue("y",300);
c.animationSequences.add({valueName: "borderColor",algo: "randomColor",fromSecond:1 , toSecond:60},["borderColor"],{});
 
bilzaa2d.play();
