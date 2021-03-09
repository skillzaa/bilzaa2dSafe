import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();

const a = bilzaa2d.element.addRectangle();
//a.addAnimation(bilzaa2d.animations.addMove(10,100,300,100,1,30));
//a.addAnimation(bilzaa2d.animations.addRotate(60,"rotateAngle",0,360,1,30));
//a.addAnimation(bilzaa2d.animations.addScale());
a.addAnimation(bilzaa2d.animations.addWidth());
a.addAnimation(bilzaa2d.animations.addRandomBackgroundColor());
bilzaa2d.play();
