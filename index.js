import Bilzaa2d from './src/bilzaa2d.js';

const bilzaa2d = new Bilzaa2d();

const canvas = bilzaa2d.shapes.addCanvas();
const rect  = bilzaa2d.shapes.addRectangle();

//.................................
rect.setAttr("x",10);
rect.setAttr("y",10);

//////////////////////////////////////////
//rect.animations.widen(1,6,200,700);
//rect.animations.heighten(1,6,200,700);
//rect.animations.scale(1,2,10,700,10,1000);
//////////////////////////////////////////
//rect.animations.moveHorizontal(7,10,10,500);
//rect.animations.moveVerticle(11,13,10,300);
//rect.animations.moveDiagonal();

//rect.animations.rotate(1,5,10,100);

//---xxx--not checked---
//rect.animations.disAappear();

bilzaa2d.play();
console.log(bilzaa2d);