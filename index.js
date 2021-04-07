import Bilzaa2d from './src/bilzaa2d.js';

const bilzaa2d = new Bilzaa2d();

const canvas = bilzaa2d.shapes.addCanvas();
const rec  = bilzaa2d.shapes.addRectangle();
const tri  = bilzaa2d.shapes.addTriangle();
tri.setAttr("width",200);
const txt  = bilzaa2d.shapes.addText();
const cir  = bilzaa2d.shapes.addCircle();


txt.animations.widen(1,4,10,100);
cir.animations.widen(1,4,10,100);
bilzaa2d.play();
console.log(bilzaa2d);