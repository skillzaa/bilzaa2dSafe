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
// a.animations.moveHorizontal(1,4,10,300);
// a.animations.moveVerticle(4,8,0,200);
//a.animations.moveDiagonal(1,5,10,200);

//a.animations.linear({attributeToAnimate: "width",fromSecond:1 , toSecond:10},[],//{from:10,to:700});

//a.animations.linear({attributeToAnimate: "height",fromSecond:1 , toSecond:10},[],{from:10,to:300});
// a.attributes.setProperty("opacity",0);
// a.animations.linear({attributeToAnimate: "opacity",fromSecond:3 , toSecond:9},[],{from:0,to:1});
// a.attributes.setProperty("opacity",0);
// a.animations.appear(1,2);
//a.animations.disAappear(1,2);
//a.animations.widen(1,4,10,600)
//a.animations.heighten(1,4,10,300)
a.animations.scale(1,4,10,300,10,300);
//a.animations.custom({attributeToAnimate: "rotateAngle",algo: "randomNumber",fromSecond:1 , toSecond:10},["rotateAngle"],{attribute: "rotateAngle"} );


 //a.animations.custom({attributeToAnimate: "titleOpacity",algo: "linear",fromSecond:1 ,toSecond:3},["titleOpacity"],{attribute: "titleOpacity",from:0, to:1} );
 
 //a.animations.add({attribute: "shadowOffsetX",algo: "linear",fromSecond:1 ,toSecond:5},["shadowOffsetX"],{attribute: "shadowOffsetX",from:50, to:-50}  ,);


////////////////////////////
////////////////////////////.
document.getElementById("play").addEventListener("click",()=>{
    const ret = bilzaa2d.play();
});
window.onload = ()=>{
   
}
//console.log(ret);
