import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();
const a = bilzaa2d.element.addRectangle();
//a.addAnimation(bilzaa2d.animations.addMove(10,100,300,100,1,30));
//a.addAnimation(bilzaa2d.animations.addRotate(60,"rotateAngle",0,360,1,30));
//a.addAnimation(bilzaa2d.animations.addScale());
 //a.addAnimation(bilzaa2d.animations.addNew({valueName: "rotateAngle",algo: "randomNumber"}));
 a.animationSequences.add({valueName: "rotateAngle",algo: "randomNumber",fromSecond:1 , toSecond:60},["x","y","width","height"]);
 //a.animationSequences.add("rotateAngle",1,60,"randomNumber");
 //a.addAnimation(bilzaa2d.animations.addNew({valueName: "y"}));
 //a.addAnimation(bilzaa2d.animations.addNew({valueName: "rotateAngle"}));
// a.addAnimation(bilzaa2d.animations.addRandomBackgroundColor());
bilzaa2d.play();
