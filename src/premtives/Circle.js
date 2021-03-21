import BasePrimtive from "./BasePrimtive.js";
export default class Circle extends BasePrimtive {
    constructor() {
        const name = "Circle";
        const attribData = [
            { name: "x", value: 100, comments: "The X location" },
            { name: "y", value: 100, comments: "The Y location" },
            { name: "radius", value: 100, comments: "" },
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
        if (this.attributes.getItemProperty("drawBorder") === true) {
            this.drawBorder();
        }
        this.metal.drawCircle(this.attributes.getItemProperty("x"), this.attributes.getItemProperty("y"), this.attributes.getItemProperty("radius"));
    }
    //---------------------------------------  
    drawBorder() {
        this.metal.drawCircle(this.attributes.getItemProperty("x"), this.attributes.getItemProperty("y"), this.attributes.getItemProperty("radius") + 10);
        //----------------------------    
    } //--draw border   
}
