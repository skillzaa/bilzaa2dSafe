import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();

//===================================================
const e = bilzaa2d.elements.addEllipse();
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

//a.animations.widen(1,4,10,600)
a.animations.widen(1,4,600,10)
//a.animations.heighten(1,4,10,300)
//a.animations.scale(1,4,10,300,10,300);
//a.animations.rotate(1,4,0,360);
//===========================================================
// a.attributes.setProperty("opacity",0);
// a.animations.appear(2,4);
//a.animations.disAappear(1,2);

//a.animations.linear({attributeToAnimate: "rotateAngle",fromSecond:1 , toSecond:5},[],{from:90, to :360} );


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
