import Algorithms from "../algo/Algorithms.js";
import IBaseAnimation from "../interfaces/IBaseAnimation.js";
import Icompulsary from "../interfaces/Icompulsary.js";

export default class SingleVariableBaseAnimation implements IBaseAnimation{
    attribute: string;
    fromSecond: number; 
    toSecond: number;
    algo: string;
    lastExecutionTime:number;
    dataRequiredFromElement:string[]|[];
    argsForAlgo : {};
    fps:number;
    algorithms:Algorithms;
    
constructor(compulsary:Icompulsary,dataRequiredFromElement:string[]|[]=[],argsForAlgo={}){
//--------------------ALGO FASADE---------------      
this.algorithms = new Algorithms();
//--------------------COMPULSARY ITEMS---------------    
 this.attribute = compulsary.attribute ;
 this.fromSecond = compulsary.fromSecond  ; //must for every animation
 this.toSecond = compulsary.toSecond ;//must for every animation
 this.algo = this.algorithms.getAlgo(compulsary.algo) ; 
 //-----------------------------------
 this.dataRequiredFromElement = dataRequiredFromElement;   
 this.argsForAlgo = argsForAlgo;
 //-----------------------------------
 this.fps =  60 ; /// this has to be settled
 //--------------------------------------------
 //this.lastExecutionTime;
}
animate(animationData:[],currentSecond:number){

//this.argsForAlgo.lastExecutionTime = this.lastExecutionTime    

const ret = this.algo(animationData,this.argsForAlgo,currentSecond);
//after running the animation reset the lastExecutionTime;
this.argsForAlgo.lastExecutionTime = Date.now()
    return ret;
}
//===============================================  
}