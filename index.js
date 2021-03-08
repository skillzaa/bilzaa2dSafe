import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();

const a = bilzaa2d.element.addRectangle();
const b = bilzaa2d.element.addRectangle();
const c = bilzaa2d.element.addRectangle();

b.basicData.x=200;
b.basicData.y=200;

c.basicData.x=300;
c.basicData.y=300;
//bilzaa2d.animations.addMove()
a.addAnimation(bilzaa2d.animations.addMove());
a.addAnimation(bilzaa2d.animations.addMove());
a.addAnimation(bilzaa2d.animations.addMove());

b.addAnimation(bilzaa2d.animations.addMove());
c.addAnimation(bilzaa2d.animations.addMove());

bilzaa2d.play();

//console.log(c);
