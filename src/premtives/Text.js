import BasePrimtive from "./BasePrimtive.js";
export default class Text extends BasePrimtive {
    constructor() {
        const name = "Text";
        const attribData = [
            { name: "title", value: "In the Name of Allah", comments: "" },
            { name: "x", value: 100, comments: "The X location" },
            { name: "y", value: 100, comments: "The Y location" },
            { name: "width", value: 100, comments: "" },
            { name: "height", value: 100, comments: "" },
            { name: "drawBorder", value: true, comments: "" },
            { name: "borderColor", value: "red", comments: "" },
            { name: "borderWidth", value: 10, comments: "" },
            { name: "rotateClockwise", value: true, comments: "t/f" },
            { name: "rotateAngle", value: 0, comments: "the angle at which the obj is currently rotated" },
            { name: "rps", value: 10, comments: "stands for rotation per sec, 6 = 360 in 1min. 0 = no rotate, this is rotation speed not current rotation angle" },
            { name: "fillStyle", value: "green", comments: "" },
            { name: "strokeStyle", value: "#F0000", comments: "" },
            { name: "shadowColor", value: "blue", comments: "" },
            { name: "shadowBlur", value: 0, comments: "" },
            { name: "shadowOffsetX", value: 0, comments: "" },
            { name: "shadowOffsetY", value: 0, comments: "" },
        ];
        super(name, attribData);
    }
    drawShape() {
        if (this.attributes.getItemValue("drawBorder") === true) {
            this.drawBorder();
        }
        this.metal.drawText(this.attributes.getItemValue("title"), this.attributes.getItemValue("x"), this.attributes.getItemValue("y"));
        //this.metal.drawTriangle(this.attributes.getItemValue("x"),this.attributes.getItemValue("y"),this.attributes.getItemValue("width"),this.attributes.getItemValue("height"),);    
        //this.metal.drawCircle(this.attributes.getItemValue("x"),this.attributes.getItemValue("y"),this.attributes.getItemValue("radius"));    
    }
    //---------------------------------------  
    drawBorder() {
        //----------------------------    
    } //--draw border   
}
