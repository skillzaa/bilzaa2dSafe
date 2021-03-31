import Animation from "../animations/Animation.js"; 
import Linear from "../animations/Linear.js";
import IbasicAnimationData from "../interfaces/IbasicAnimationData.js";

export default class Animations{ 
data:object[]|[];       
constructor(){
this.data=[];
}  

linear(basicAnimationData:IbasicAnimationData,dataFromElement=[],argsForAlgo={}){
    const l = new Linear(
        basicAnimationData,dataFromElement,argsForAlgo);
    this.data.push(l);    
    return true;
} 
// //---------------------------------
moveHorizontal(fromSecond=1,toSecond=5,from=1,to=100){
    const l = new Linear(
        {attributeToAnimate: "x",fromSecond:fromSecond, toSecond:toSecond},[],{from:from, to:to});
    this.data.push(l);    
    return true;
}
// //---------------------------------
moveVerticle(fromSecond=1,toSecond=5,from=1,to=100){
    const l = new Linear(
        {attributeToAnimate: "y",fromSecond:fromSecond, toSecond:toSecond},[],{from:from, to:to});
    this.data.push(l);    
    return true;    
}
// //---------------------------------
moveDiagonal(fromSecond=1,toSecond=5,from=1,to=100){
    const lX = new Linear(
        {attributeToAnimate: "x",fromSecond:fromSecond, toSecond:toSecond},[],{from:from, to:to});
    this.data.push(lX);   

    const ly = new Linear(
        {attributeToAnimate: "y",fromSecond:fromSecond, toSecond:toSecond},[],{from:from, to:to});
    this.data.push(ly);    
    return true;    
}
// appear(fromSecond,toSecond){
//     const l = new Linear(
//         {attributeToAnimate: "opacity",fromSecond:fromSecond, toSecond:toSecond},[],{from:0, to:1});
//     this.data.push(l);       
// }
// disAappear(fromSecond,toSecond){
//     const l = new Linear(
//         {attributeToAnimate: "opacity",fromSecond:fromSecond, toSecond:toSecond},[],{from:1, to:0});
//     this.data.push(l);       
// }
widen(fromSecond,toSecond,from,to){
    const l = new Linear(
        {attributeToAnimate: "width",fromSecond:fromSecond, toSecond:toSecond},[],{from:from, to:to});
    this.data.push(l);    
    return true;    
}
heighten(fromSecond,toSecond,from,to){
    const l = new Linear(
        {attributeToAnimate: "height",fromSecond:fromSecond, toSecond:toSecond},[],{from:from, to:to});
    this.data.push(l);    
    return true;    
}
scale(fromSecond,toSecond,fromWidth,toWidth,fromHeight,toHeight){
    const w = new Linear(
        {attributeToAnimate: "width",fromSecond:fromSecond, toSecond:toSecond},[],{from:fromWidth, to:toWidth});
    this.data.push(w);    
//----------------------------
    const h = new Linear(
        {attributeToAnimate: "height",fromSecond:fromSecond, toSecond:toSecond},[],{from:fromHeight, to:toHeight});
    this.data.push(h);    
    return true;    
}
rotate(fromSecond, toSecond,from,to){
    const w = new Linear(
        {attributeToAnimate: "rotateAngle",fromSecond:fromSecond, toSecond:toSecond},[],{from:from, to:to});
    this.data.push(w);    
    return true;
}
//---------------------------------
}