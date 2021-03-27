import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();

//===================================================
const a = bilzaa2d.elements.addRectangle();
a.attributes.setProperty("width" , 400);
a.attributes.setProperty("height" , 200);
a.attributes.setProperty("borderColor" , "red");
a.attributes.setProperty("titleColor" , "red");
a.attributes.setProperty("titleFontSize" , 100);
a.attributes.setProperty("titleOpacity" , 0);
// a.attributes.setProperty("drawBorder",true);
// a.attributes.setProperty("borderWidth",5);
// a.attributes.setProperty("dashedBorder",false);
// a.attributes.setProperty("transparent",false);
//  a.animations.add({attribute: "rotateAngle",algo: "randomNumber",fromSecond:5 , toSecond:10},["rotateAngle"],{}, {fps:60});
//  a.animations.add({attribute: "rotateAngle",algo: "randomNumber",fromSecond:15 , toSecond:20},["rotateAngle"],{}, {fps:60});

 a.animations.add({attribute: "titleOpacity",algo: "linear",fromSecond:1 ,toSecond:3},["titleOpacity"],{attribute: "titleOpacity",from:0, to:1}  ,{fps:60});
 
 a.animations.add({attribute: "shadowOffsetX",algo: "linear",fromSecond:1 ,toSecond:5},["shadowOffsetX"],{attribute: "shadowOffsetX",from:50, to:-50}  ,{fps:60});

////////////////////////////
////////////////////////////
const ret = bilzaa2d.play();
//console.log(ret);
