import ArrayOfObjects from "../single/ArrayOfObjects";

export default interface IBasePrimtives {
    clearCanvasFlag:boolean;
    attributes : ArrayOfObjects; //the name is also in the attributes
    setNextFrame(a:number) :boolean;
    draw():void;
}