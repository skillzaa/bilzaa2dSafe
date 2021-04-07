import Bilzaa2d from './src/bilzaa2d.js.js';

const bilzaa2d = new Bilzaa2d();

const canvas = bilzaa2d.shapes.addCanvas();
//const rect  = bilzaa2d.shapes.addRectangle();

//.................................
// rect.setAttr("x",10);
// rect.setAttr("y",10);

//////////////////////////////////////////

//rect.animations.scale(1,2,10,700,10,1000);
//////////////////////////////////////////
//rect.animations.moveHorizontal(7,10,10,500);
//rect.animations.moveVerticle(11,13,10,300);
//rect.animations.moveDiagonal();

// rect.animations.rotate(1,5,10,200);


///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
//const tri  = bilzaa2d.shapes.addTriangle();

//.................................
//tri.setAttr("x",10);
// tri.setAttr("y",10);

//////////////////////////////////////////
//tri.animations.scale(1,2,10,700,10,1000);
//////////////////////////////////////////
//tri.animations.moveHorizontal(1,5,10,500);
//tri.animations.moveVerticle(1,5,10,300);
// tri.animations.moveDiagonal();

// tri.animations.rotate(1,5,10,600);

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
const txt  = bilzaa2d.shapes.addText(); 
txt.setAttr("title", "This is some text being drawn");
//.................................
txt.setAttr("x",10);
txt.setAttr("y",10);

//////////////////////////////////////////
//txt.animations.scale(1,2,10,700,10,1000);//---- not working
//////////////////////////////////////////
//txt.animations.moveHorizontal(1,5,10,500);
//txt.animations.moveVerticle(1,5,10,300);
//txt.animations.moveDiagonal();

txt.animations.rotate(1,5,10,600);

/////////////////////////////////////////////
/////////////////////////////////////////////
/////////////////////////////////////////////
const circle  = bilzaa2d.shapes.addCircle(); 
circle.setAttr("title", "This is some text being drawn");
//.................................
circle.setAttr("x",10);
circle.setAttr("y",10);

//////////////////////////////////////////
//circle.animations.scale(1,2,10,700,10,1000);//---- not working
//////////////////////////////////////////
//circle.animations.moveHorizontal(1,5,10,500);
//circle.animations.moveVerticle(1,5,10,300);
circle.animations.moveDiagonal();

circle.animations.rotate(1,5,10,600);





bilzaa2d.play();
console.log(bilzaa2d);