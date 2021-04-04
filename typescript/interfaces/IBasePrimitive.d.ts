import ArrayOfObjects from "../single/ArrayOfObjects";
export default interface IBasePrimtives {
    clearCanvasFlag: boolean;
    attributes: ArrayOfObjects;
    setNextFrame(a: number): boolean;
    draw(): void;
}
