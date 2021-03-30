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
//a.animations.moveDiagonal(3,10,10,200);
//a.animations.custom({attributeToAnimate: "width",algo: "linear",fromSecond:1 , toSecond:300},["height"],{delay:100, from:10, to:400});

a.animations.testAnimation();
//a.animations.custom({attributeToAnimate: "rotateAngle",algo: "randomNumber",fromSecond:1 , toSecond:10},["rotateAngle"],{attribute: "rotateAngle"} );


 //a.animations.custom({attributeToAnimate: "titleOpacity",algo: "linear",fromSecond:1 ,toSecond:3},["titleOpacity"],{attribute: "titleOpacity",from:0, to:1} );
 
 //a.animations.add({attribute: "shadowOffsetX",algo: "linear",fromSecond:1 ,toSecond:5},["shadowOffsetX"],{attribute: "shadowOffsetX",from:50, to:-50}  ,);


////////////////////////////
////////////////////////////
window.onload = ()=>{
    const ret = bilzaa2d.play();
}
//console.log(ret);
