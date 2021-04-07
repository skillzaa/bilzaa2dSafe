import Linear from "./Linear.js";
import IaniData from "../interfaces/IaniData.js";

export default class AnimationsFasade{ 
data:object[]|[];       
constructor(){
this.data=[];
}  

linear(aniData:IaniData, argsForAlgo={}){
    const l = new Linear(aniData,argsForAlgo);
    this.data.push(l);    
    return true;
} 
// //---------------------------------
moveHorizontal(fromSecond=1,toSecond=5,fromX=1,toX=100){
    const l = new Linear(
        {attributeToAnimateName: "x",fromSecond:fromSecond, toSecond:toSecond, readOnlyElementAttrNames:[]},{from:fromX, to:toX});
    this.data.push(l);    
    return true;
}
// //---------------------------------
moveVerticle(fromSecond=1,toSecond=5,fromY=1,toY=100){
    const l = new Linear(
        {attributeToAnimateName: "y",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:fromY, to:toY});
    this.data.push(l);    
    return true;    
}
// //---------------------------------
moveDiagonal(fromSecond=1,toSecond=5,fromX=1,toX=100,fromY=1,toY=100){
    const lX = new Linear(
        {attributeToAnimateName: "x",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:fromX, to:toX});
    this.data.push(lX);   

    const ly = new Linear(
        {attributeToAnimateName: "y",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:fromY, to:toY});
    this.data.push(ly);    
    return true;    
}
// appear(fromSecond,toSecond){
//     const l = new Linear(
//         {attributeToAnimateName: "opacity",fromSecond:fromSecond, toSecond:toSecond},[],{from:0, to:1});
//     this.data.push(l);       
// }
disAappear(fromSecond=1,toSecond=5){
    const l = new Linear(
        {attributeToAnimateName: "opacity",fromSecond:fromSecond, toSecond:toSecond},[],{from:1, to:0});
    this.data.push(l);       
}
widen(fromSecond:number,toSecond:number,from:number,to:number){
    const l = new Linear(
        {attributeToAnimateName: "width",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:from, to:to});
    this.data.push(l);    
    return true;    
}
heighten(fromSecond:number,toSecond:number,from:number,to:number){
    const l = new Linear(
        {attributeToAnimateName: "height",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:from, to:to});
    this.data.push(l);    
    return true;    
}
scale(fromSecond:number,toSecond:number,fromWidth:number,toWidth:number,fromHeight:number,toHeight:number){
    const w = new Linear(
        {attributeToAnimateName: "width",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:fromWidth, to:toWidth});
    this.data.push(w);    
//----------------------------
    const h = new Linear(
        {attributeToAnimateName: "height",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:fromHeight, to:toHeight});
    this.data.push(h);    
    return true;    
}
rotate(fromSecond:number=1, toSecond:number=5,from:number=1,to:number=100):Linear{
    const w = new Linear(
        {attributeToAnimateName: "currentRotateAngle",fromSecond:fromSecond, toSecond:toSecond,readOnlyElementAttrNames:[]},{from:from, to:to});
    this.data.push(w);    
    return w;
}
//---------------------------------
}