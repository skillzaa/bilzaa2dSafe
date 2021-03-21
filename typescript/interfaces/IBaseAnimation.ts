export default interface IBaseAnimation {
    attribute: string;
    fromSecond: number; 
    toSecond: number;
    dataRequired: string[];
    future: {};

    animate(a:[] , b:number): string; 
    algo:string;
}