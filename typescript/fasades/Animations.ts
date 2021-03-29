import SingleVariableBaseAnimation from "../animations/SingleVariableBaseAnimation.js"; 
import Icompulsary from "../interfaces/Icompulsary.js";

export default class Animations{ 
data:object[]|[];       
constructor(){
this.data=[];
}   
custom(compulsary:Icompulsary,dataFromElement=[],argsForAlgo={}){
const aniSeq = new SingleVariableBaseAnimation(compulsary,dataFromElement,argsForAlgo);
this.data.push(aniSeq);    
return true;
} 
//---------------------------------
moveHorizontal(fromSecond=1,toSecond=5,from=1,to=100){
const ani = new SingleVariableBaseAnimation(
    {attributeToAnimate: "x",algo: "linear",fromSecond:fromSecond , toSecond:toSecond},
    ["x"],
    {attribute: "x" , from : from , to:to}
    );
this.data.push(ani);    
return true;
}
//---------------------------------
moveVerticle(fromSecond=1,toSecond=5,from=1,to=100){
const ani = new SingleVariableBaseAnimation(
    {attribute: "y",algo: "linear",fromSecond:fromSecond , toSecond:toSecond},
    ["y"],
    {attribute: "y" , from : from , to:to}
    );
this.data.push(ani);    
return true;
}
//---------------------------------
//---------------------------------
moveDiagonal(fromSecond=1,toSecond=5,from=1,to=100){
const aniX = new SingleVariableBaseAnimation(
    {attribute: "x",algo: "linear",fromSecond:fromSecond , toSecond:toSecond},
    ["x"],
    {attribute: "x" , from : from , to:to}
    );
this.data.push(aniX);    
const aniY = new SingleVariableBaseAnimation(
    {attribute: "y",algo: "linear",fromSecond:fromSecond , toSecond:toSecond},
    ["y"],
    {attribute: "y" , from : from , to:to}
    );
this.data.push(aniY);    
return true;
}
//---------------------------------
}