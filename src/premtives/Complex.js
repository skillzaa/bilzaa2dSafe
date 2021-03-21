import BasePrimtive from "./BasePrimtive.js";
import Circle from "./Circle.js";
export default class Complex extends BasePrimtive {
    constructor() {
        const name = "Complex";
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
        this.circle = new Circle();
    }
    drawShape() {
        this.circle.attributes.setProperty("x", 600);
        this.circle.attributes.setProperty("y", 200);
        this.circle.attributes.setProperty("radius", 150);
        this.circle.draw();
        this.circle.attributes.setProperty("radius", 100);
        this.circle.draw();
        this.circle.attributes.setProperty("radius", 50);
        this.circle.draw();
        this.circle.attributes.setProperty("radius", 25);
        this.circle.draw();
    }
    //---------------------------------------  
    drawBorder() {
        this.metal.drawCircle(this.attributes.getItemValue("x"), this.attributes.getItemValue("y"), this.attributes.getItemValue("radius") + 10);
        //----------------------------    
    } //--draw border   
}
