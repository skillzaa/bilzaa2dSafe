import Bilzaa2d from "./src/bilzaa2d.js";

const bilzaa2d = new Bilzaa2d();

//===================================================
// const e = bilzaa2d.elements.addEllipse();
// const a = bilzaa2d.elements.addRectangle();
// a.attributes.setProperty("x" , 10);
// a.attributes.setProperty("width" , 10);
// a.attributes.setProperty("height" , 50);
// a.attributes.setProperty("borderColor" , "red");
// a.attributes.setProperty("titleColor" , "red");
// a.attributes.setProperty("titleFontSize" , 100);
// a.attributes.setProperty("titleOpacity" , 0);
const can = bilzaa2d.shapes.addCanvas();
//=============================================================
const p = bilzaa2d.shapes.addRectangle();
p.attributes.setProperty("x",250);
p.attributes.setProperty("backgroundColor","red");
p.attributes.setProperty("width" , 200);
p.attributes.setProperty("height" , 50);

p.attributes.setProperty("titleColor" , "yellow");
p.attributes.setProperty("title" , "red");
p.attributes.setProperty("titleFontSize" , 100);
p.attributes.setProperty("titleOpacity" , 1);


//console.log(p);
//--------------------------------------
 const t = bilzaa2d.shapes.addTriangle();
t.setAttr("y",200);
t.setAttr("title","Triangle");
 
const o = bilzaa2d.shapes.addCircle();
o.setAttr("x",300);
o.setAttr("title","Circle");  

const txt = bilzaa2d.shapes.addText();

//bilzaa2d.drawShapes();
//--------------------ANIMATIONS
//a.animations.moveHorizontal(1,4,10,400);
// a.animations.moveVerticle(4,8,0,200);
//a.animations.moveDiagonal(1,5,10,200);

//a.animations.widen(1,4,10,600)
// a.animations.widen(1,4,10,500)
// a.animations.heighten(5,9,50,300)
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
    //    const ret = bilzaa2d.play();
});
window.onload = ()=>{
   
}
const ret = bilzaa2d.play();
//console.log(ret);
