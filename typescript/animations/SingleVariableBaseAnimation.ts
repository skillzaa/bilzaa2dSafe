import Algorithms from "../algo/Algorithms.js";
import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import Icompulsary from "../interfaces/Icompulsary.js";

export default class SingleVariableBaseAnimation implements IBaseAnimation{
    attribute: string;
    fromSecond: number; 
    toSecond: number;
    algo: string;
    dataRequired:string[]|[];
    argsForAlgo : {};
    fps:number;
    algorithms:Algorithms;
    
constructor(compulsary:Icompulsary,dataRequired:string[]|[]=[],argsForAlgo={}){
//--------------------ALGO FASADE---------------      
this.algorithms = new Algorithms();
//--------------------COMPULSARY ITEMS---------------    
 this.attribute = compulsary.attribute ;
 this.fromSecond = compulsary.fromSecond  ; //must for every animation
 this.toSecond = compulsary.toSecond ;//must for every animation
 this.algo = this.algorithms.getAlgo(compulsary.algo) ; 
 //-----------------------------------
 this.dataRequired = dataRequired;   
 this.argsForAlgo = argsForAlgo;
 //-----------------------------------
 this.fps =  60 ; /// this has to be settled
}
animate(animationData:[],currentSecond:number){
const ret = this.algo(animationData,currentSecond);
    return ret;
}
//===============================================  
}