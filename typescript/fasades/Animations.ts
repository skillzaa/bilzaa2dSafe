import Animation from "../animations/Animation.js"; 
import Linear from "../animations/Linear.js";


export default class Animations{ 
data:object[]|[];       
constructor(){
this.data=[];
}  
testAnimation(){
    const l = new Linear({attributeToAnimate: "x",fromSecond:1, toSecond:10},['height'],{from:1, to:400});
    this.data.push(l);    
    return true;
} 
// custom(compulsary:Icompulsary,dataFromElement=[],argsForAlgo={}){
// const aniSeq = new Animation(compulsary,dataFromElement,argsForAlgo);
// this.data.push(aniSeq);    
// return true;
// } 
// //---------------------------------
// moveHorizontal(fromSecond=1,toSecond=5,from=1,to=100){
// const ani = new SingleVariableBaseAnimation(
//     {attributeToAnimate: "x",algo: "linear",fromSecond:fromSecond , toSecond:toSecond},
//     ["x"],
//     {attribute: "x" , from : from , to:to}
//     );
// this.data.push(ani);    
// return true;
// }
// //---------------------------------
// moveVerticle(fromSecond=1,toSecond=5,from=1,to=100){
// const ani = new SingleVariableBaseAnimation(
//     {attribute: "y",algo: "linear",fromSecond:fromSecond , toSecond:toSecond},
//     ["y"],
//     {attribute: "y" , from : from , to:to}
//     );
// this.data.push(ani);    
// return true;
// }
// //---------------------------------
// //---------------------------------
// moveDiagonal(fromSecond=1,toSecond=5,from=1,to=100){
// const aniX = new SingleVariableBaseAnimation(
//     {attribute: "x",algo: "linear",fromSecond:fromSecond , toSecond:toSecond},
//     ["x"],
//     {attribute: "x" , from : from , to:to}
//     );
// this.data.push(aniX);    
// const aniY = new SingleVariableBaseAnimation(
//     {attribute: "y",algo: "linear",fromSecond:fromSecond , toSecond:toSecond},
//     ["y"],
//     {attribute: "y" , from : from , to:to}
//     );
// this.data.push(aniY);    
// return true;
// }

//---------------------------------
}