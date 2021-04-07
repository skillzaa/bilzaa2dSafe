import Bilzaa2d from './src/bilzaa2d.js';

const bilzaa2d = new Bilzaa2d();

const canvas = bilzaa2d.shapes.addCanvas();
//const rect  = bilzaa2d.shapes.addRectangle();

//.................................
// rect.setAttr("x",10);
// rect.setAttr("y",10);

//////////////////////////////////////////
//rect.animations.widen(1,6,200,700);
//rect.animations.heighten(1,6,200,700);
//rect.animations.scale(1,2,10,700,10,1000);
//////////////////////////////////////////
//rect.animations.moveHorizontal(7,10,10,500);
//rect.animations.moveVerticle(11,13,10,300);
//rect.animations.moveDiagonal();

// rect.animations.rotate(1,5,10,200);

//---xxx--not checked---
//rect.animations.disAappear();


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
const tri  = bilzaa2d.shapes.addTriangle();

//.................................
tri.setAttr("x",10);
tri.setAttr("y",10);

//////////////////////////////////////////
//tri.animations.widen(1,6,200,700);
//tri.animations.heighten(1,6,200,700);
//tri.animations.scale(1,2,10,700,10,1000);
//////////////////////////////////////////
//tri.animations.moveHorizontal(1,5,10,500);
//tri.animations.moveVerticle(1,5,10,300);
tri.animations.moveDiagonal();

tri.animations.rotate(1,5,10,600);

//---xxx--not checked---
//tri.animations.disAappear();





bilzaa2d.play();
console.log(bilzaa2d);