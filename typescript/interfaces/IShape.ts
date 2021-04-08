import ArrayOfObjects from "../single/ArrayOfObjects";

export default interface IShape {
    
    attributes : ArrayOfObjects; //the name is also in the attributes
    
    update(a:number) :boolean
    // preUpdate():void;
    // postUpdate():void;

    draw():void;
    // preDraw():void;
    // postDraw():void;

}