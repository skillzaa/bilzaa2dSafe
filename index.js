import Bilzaa2d from './src/bilzaa2d.js';
const bilzaa2d = new Bilzaa2d();
const canvas = bilzaa2d.shapes.addCanvas();


const rect  = bilzaa2d.shapes.addRectangle();
 rect.setAttr("x",10);
rect.setAttr("y",10);
rect.setAttr("width",100);
rect.setAttr("height",100);
//////////////////////////////////////////
rect.animations.moveHorizontal(1,3,10,500);
rect.animations.scale(4,6,10,700,10,300);
//rect.animations.moveVerticle(11,13,10,300);
//rect.animations.moveDiagonal();

rect.animations.rotate(7,10,10,200);
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
const tri  = bilzaa2d.shapes.addTriangle();
 tri.setAttr("x",10);
tri.setAttr("y",200);
tri.setAttr("width",100);
tri.setAttr("height",100);
tri.setAttr("color","red");
//////////////////////////////////////////
tri.animations.moveHorizontal(1,3,10,500);
tri.animations.scale(4,6,100,200,100,200);
//tri.animations.moveVerticle(11,13,10,300);
//tri.animations.moveDiagonal();

tri.animations.rotate(7,10,10,200);
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
const cir  = bilzaa2d.shapes.addCircle();
 cir.setAttr("x",10);
cir.setAttr("y",400);
cir.setAttr("radius",100);

cir.setAttr("color","blue");
//////////////////////////////////////////
cir.animations.moveHorizontal(1,3,10,500);
cir.animations.scale(4,6,100,200);
//cir.animations.moveVerticle(11,13,10,300);
//cir.animations.moveDiagonal();

//cir.animations.rotate(7,10,10,200);
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
const txt  = bilzaa2d.shapes.addText();
 txt.setAttr("x",500);
txt.setAttr("y",100);
txt.setAttr("radius",100);

txt.setAttr("color","blue");
//////////////////////////////////////////
txt.animations.moveHorizontal(1,3,300,500);
txt.animations.scale(4,6,100,200);
//txt.animations.moveVerticle(11,13,10,300);
//txt.animations.moveDiagonal();

txt.animations.rotate(5,10,10,200);
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////


bilzaa2d.play();
console.log(bilzaa2d);