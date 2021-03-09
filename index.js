import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();

const a = bilzaa2d.element.addRectangle();
a.addAnimation(bilzaa2d.animations.addMove(10,10,100,200,1,50));
a.addAnimation(bilzaa2d.animations.addRotate(12,true,1,50));

bilzaa2d.play();
