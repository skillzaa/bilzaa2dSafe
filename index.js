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

//--------------------ANIMATIONS
// a.animations.moveHorizontal(1,10,10,300);
// a.animations.moveVerticle(10,20,10,300);
a.animations.moveDiagonal(3,10,10,200);
//a.animations.custom({attribute: "width",algo: "randomNumber",fromSecond:1 , toSecond:30},["width"],{delay:100});


a.animations.custom({attribute: "rotateAngle",algo: "randomNumber",fromSecond:1 , toSecond:10},["rotateAngle"],{attribute: "rotateAngle"} );
//  a.animations.add({attribute: "rotateAngle",algo: "randomNumber",fromSecond:15 , toSecond:20},["rotateAngle"],{} );

 a.animations.custom({attribute: "titleOpacity",algo: "linear",fromSecond:1 ,toSecond:3},["titleOpacity"],{attribute: "titleOpacity",from:0, to:1} );
 
 //a.animations.add({attribute: "shadowOffsetX",algo: "linear",fromSecond:1 ,toSecond:5},["shadowOffsetX"],{attribute: "shadowOffsetX",from:50, to:-50}  ,);


////////////////////////////
////////////////////////////
window.onload = ()=>{
    const ret = bilzaa2d.play();
}
//console.log(ret);
