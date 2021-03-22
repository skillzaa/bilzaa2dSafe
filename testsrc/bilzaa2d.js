'use strict';

/**The app can have 2 states wrt time. One is running state and other paused. both cases are to be dealt with seperately. during running the time is calculated by the difference between time now ans start time. on the other hand during pause the time is placed in side oldTime and can be managed from there. when resumend this old time is subtracted from the startTime (this oldTime is the time which the animation has run before resume to we need to add that).
 * similarly for forward and rewind also we have to treat both states seperately.
*/
class PlayHead {
    constructor() {
        this.duration = 100000;
        this.oldTime = 0;
        this.paused = true;
        this.startTime = 0;
    }
    runningTime() {
        if (this.paused === false) {
            const t = (Date.now() - this.startTime);
            return Number((t / 1000).toFixed(2));
        }
        else {
            return this.oldTime / 1000;
        }
    }
    play() {
        if (this.paused === true) { //cant be repeated w/o stop
            this.startTime = (Date.now() - this.oldTime);
            this.oldTime = 0;
            this.paused = false;
        }
    }
    pause() {
        if (this.paused === false) { // so playinh now will pause
            this.oldTime = Date.now() - this.startTime; //store time
            this.startTime = 0;
            this.paused = true;
        }
    }
    stop() {
        this.oldTime = 0; //since its start so old time is gone
        this.startTime = 0;
        this.paused = true;
    }
    resume() {
        this.play();
    }
    forward(ms = 5000) {
        let oldPause = false;
        if (this.paused === true) {
            oldPause = true;
        }
        this.pause();
        if (this.oldTime + ms < this.duration) {
            this.oldTime = this.oldTime + ms;
        }
        if (oldPause == false) {
            this.play();
        }
    }
    rewind(ms = 5000) {
        let oldPause = false;
        if (this.paused === true) {
            oldPause = true;
        }
        this.pause();
        if (this.oldTime - ms > 0) {
            this.oldTime = this.oldTime - ms;
        }
        if (oldPause == false) {
            this.play();
        }
    }
}

class Metal {
    constructor() {
        this.load();
    }
    //....................
    load(canvasName = "bilzaaCanvas") {
        try {
            this.canvas = document.getElementById(canvasName);
            this.ctx = this.canvas.getContext('2d');
            this.ctx.canvas.width = window.innerWidth;
            this.ctx.canvas.height = window.innerHeight;
        }
        catch (err) {
            return false;
        }
    }
    //....................
    clear() {
        this.ctx.fillStyle = "#f5ecc3";
        //clear the canvas
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } //fn
    clearCanvas(fillStyle = "#e9f7f2") {
        this.ctx.fillStyle = fillStyle;
        //clear the canvas
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    } //fn
    drawRectangle(x = 10, y = 10, width = 100, height = 100) {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(x, y, width, height);
        this.ctx.strokeRect(x + 50, y + 50, width, height);
    }
    drawRectangleBorder(x, y, width, height, fillStyle = '#000', thickness = 1) {
        this.ctx.fillStyle = fillStyle;
        this.ctx.fillRect(x - (thickness), y - (thickness), width + (thickness * 2), height + (thickness * 2));
        this.ctx.fillRect(x - (thickness), y - (thickness), width + (thickness * 2), height + (thickness * 2));
    }
    drawCircle(x, y, radius) {
        this.ctx.beginPath();
        this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
        this.ctx.stroke();
    }
    drawTriangle(x, y, width, height, fillStyle) {
        this.ctx.fillStyle = fillStyle;
        this.ctx.beginPath();
        this.ctx.moveTo(x, y + height);
        this.ctx.lineTo(x + width, y + height);
        this.ctx.lineTo(x + width / 2, y);
        this.ctx.fill();
    }
    drawText(title, x, y) {
        this.ctx.fillStyle = "red";
        this.ctx.font = "20px Georgia";
        this.ctx.fillText(title, x, y);
    }
}

/** WHAT INTERFACE THE STORED OBJECT SHOULD HAVE:
 * 1--every objects must have a unique string "name"  field
 * 2--every OBJECT MUST NNOOTT HAVE "value" field.--we can use any property
 * 3-- the data array is public since its just a helpful array dont make it more compelx.
 */
class ArrayOfObjects {
    constructor() {
        this.data = [];
    }
    add(incomming = {}) {
        this.data.push(incomming);
        return incomming;
    }
    // add(name:string){
    // if (this.isUnique(name) === true){
    //     const a = {};
    //     a.name = name; 
    //     this.data.push(a);
    //     return a;    
    // } else {
    //     return {success: false, message : "Please Provide a unique and valid string name for the object", errorMessage: "nonUniqueName" }
    // }   
    // } 
    isUnique(name) {
        if (typeof name == "undefined") {
            return false;
        }
        let uniqueOrNot = true;
        for (let idx = 0; idx < this.data.length; idx++) {
            const element = this.data[idx];
            if (element.name === name) {
                uniqueOrNot = false;
            }
        }
        return uniqueOrNot;
    }
    get length() {
        return this.data.length;
    }
    getItem(name) {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx];
            }
        }
        return false;
    } //.....................
    getProperty(name, propertyName = "value") {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx][propertyName];
            }
        }
        return false;
    }
    setProperty(name, value, propertyName = "value") {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                this.data[idx][propertyName] = value;
                return this.data[idx];
            }
        }
        return true;
    } //......
    getAllByNames(argumentsRequired = []) {
        /**incooming is normal [] where as attributes is an obj wrapped around an aOO */
        const ret = [];
        this.data.forEach(bd => {
            argumentsRequired.forEach(ag => {
                if (ag == bd.name) {
                    ret.push(bd);
                }
            });
        });
        return ret;
    }
    insertPropertiesFromArray(retData) {
        this.data.forEach(bd => {
            retData.forEach(ag => {
                if (ag.name == bd.name) {
                    bd.value = ag.value;
                }
            });
        });
        return true;
    } //..
    setAllProperties(propertyName, newValue) {
    }
    getItemsByNames(argumentsRequired = []) {
        /**incooming is normal []  */
        const ret = [];
        this.data.forEach(bd => {
            argumentsRequired.forEach(ag => {
                if (ag == bd.name) {
                    ret.push(bd);
                }
            });
        });
        return ret;
    }
}

const linear = function (incomming, currentSecond) {
    const timeDiff = parseInt((this.toSecond - this.fromSecond));
    const totalValueDiff = parseInt((this.argsForAlgo.to - this.argsForAlgo.from));
    this.deltaPerSecond = totalValueDiff / timeDiff;
    this.deltaPerFrame = this.deltaPerFrame = this.deltaPerSecond / this.fps;
    //------------    
    incomming.forEach(attribute => {
        if (attribute.name == this.attribute) {
            //here its just ++ wo time, note the +=  
            attribute.value += this.deltaPerFrame;
            //now am using current second
            // attribute.value = this.from + (this.deltaPerSecond * currentSecond)  ;
        }
    });
    return incomming;
};

const randomNumber = function (bdReqForAni, currentSecond) {
    bdReqForAni.forEach(attributre => {
        if (attributre.name == this.attribute) {
            attributre.value = getRandomInt();
        }
    });
    return bdReqForAni;
};
function getRandomInt(max = 15) {
    return Math.floor(Math.random() * Math.floor(max));
}

const randomColor = function (bdReqForAni, currentSecond) {
    bdReqForAni.forEach(element => {
        if (element.name == this.attribute) {
            element.value = randomHexColorCode();
        }
    });
    return bdReqForAni;
};
function randomHexColorCode() {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
}

const blink = function (bdReqForAni, currentSecond) {
    if (typeof this.future.counter == "undefined") {
        this.future.counter = 0;
    }
    else {
        this.future.counter++;
    }
    //-----------------------    
    bdReqForAni.forEach(element => {
        if ((element.name == this.attribute) && this.future.counter > this.argsForAlgo.speed) {
            this.future.counter = 0;
            if (element.value === true) {
                element.value = false;
            }
            else {
                element.value = true;
            }
        }
    });
    return bdReqForAni;
};

class Algorithms {
    constructor() {
    }
    getAlgo(name) {
        switch (name) {
            case "linear":
                return linear;
            case "randomNumber":
                return randomNumber;
            case "randomColor":
                return randomColor;
            case "toggle":
                return blink;
            default:
                return linear;
        }
        //return "ok";//just to shut typescript off    
    }
}

class SingleVariableBaseAnimation {
    constructor(compulsary, dataRequired = [], argsForAlgo = {}, future) {
        //--------------------ALGO FASADE---------------      
        this.algorithms = new Algorithms();
        //--------------------COMPULSARY ITEMS---------------    
        this.attribute = compulsary.attribute;
        this.fromSecond = compulsary.fromSecond; //must for every animation
        this.toSecond = compulsary.toSecond; //must for every animation
        this.algo = this.algorithms.getAlgo(compulsary.algo);
        //-----------------------------------
        this.dataRequired = dataRequired;
        this.future = future;
        this.argsForAlgo = argsForAlgo;
        //-----------------------------------
        this.fps = future.fps;
    }
    animate(animationData, currentSecond) {
        const ret = this.algo(animationData, currentSecond);
        return ret;
    }
}

class Animations {
    constructor() {
        this.data = [];
    }
    add(compulsary, dataFromElement = [], argsForAlgo = {}, future = {}) {
        const aniSeq = new SingleVariableBaseAnimation(compulsary, dataFromElement, argsForAlgo, future);
        this.data.push(aniSeq);
        return true;
    }
}

class BasePrimtive extends Metal {
    constructor(name = "Element") {
        super();
        this.name = name;
        //=======================attributes
        this.attributes = new ArrayOfObjects();
        //--x,y,width,height--
        this.attributes.add({ name: "x", value: 100, comments: "The X location" });
        this.attributes.add({ name: "y", value: 100, comments: "The Y location" });
        this.attributes.add({ name: "width", value: 100, comments: "" });
        this.attributes.add({ name: "height", value: 50, comments: "" });
        //--Border--
        this.attributes.add({ name: "drawBorder", value: true, comments: "" });
        this.attributes.add({ name: "borderColor", value: "red", comments: "" });
        this.attributes.add({ name: "borderWidth", value: 10, comments: "" });
        //--rotation--
        this.attributes.add({ name: "rotateClockwise", value: true, comments: "t/f" });
        this.attributes.add({ name: "rotateAngle", value: 0, comments: "the angle at which);the obj is currently rotated" });
        this.attributes.add({ name: "rps", value: 10, comments: "rotation persec, 6 = 360 in 1min. 0 = no rotate, this is rotation speed not current rotation angle" });
        //--colors--
        this.attributes.add({ name: "fillStyle", value: "green", comments: "" });
        this.attributes.add({ name: "strokeStyle", value: "#F0000", comments: "" });
        //--shadows--
        this.attributes.add({ name: "shadowColor", value: "blue", comments: "" });
        this.attributes.add({ name: "shadowBlur", value: 0, comments: "" });
        this.attributes.add({ name: "shadowOffsetX", value: 0, comments: "" });
        this.attributes.add({ name: "shadowOffsetY", value: 0, comments: "" });
        //====Animations=============
        this.animations = new Animations();
        //==================================
        this.clearCanvasFlag = false; //first element of the frame has to clean
        this.metal = new Metal();
        //--get attrib data into attribute object
    }
    setNextFrame(currentSecond) {
        if (this.clearCanvasFlag === true) {
            this.metal.clearCanvas();
            this.clearCanvasFlag === false; //shd this be here?
        }
        //==================LLLLLOOOOPPPPP======================== 
        this.animations.data.forEach(animation => {
            //----STEP 1 -- GET DATA FROM ATTRIBUTES COLLECTION
            //filter out not relavant seq here
            if ((currentSecond > animation.fromSecond)
                &&
                    (currentSecond <= animation.toSecond)) {
                //----STEP 2 -- GET DATA FROM ATTRIBUTES COLLECTION
                const elementDataBeingSentToAnimation = this.attributes.getItemsByNames(animation.dataRequired);
                //----STEP 3 -- Animate the data
                const retData = animation.animate(elementDataBeingSentToAnimation, currentSecond);
                //----STEP 4 -- SAVE ATTRIBUTES
                this.attributes.insertPropertiesFromArray(retData); //retData is aoo
            } /////--filter no relevant animations
            //========================================== 
        });
        return true;
    }
    draw() {
    }
}

class Rectangle extends BasePrimtive {
    constructor() {
        super("rectangle");
    }
    draw() {
        if (this.attributes.getProperty("drawBorder") === true) {
            this.drawBorder();
        }
        this.ctx.fillStyle = this.attributes.getItem("fillStyle").value;
        this.ctx.strokeStyle = this.attributes.getItem("strokeStyle").value;
        this.ctx.shadowColor = this.attributes.getItem("shadowColor").value;
        this.ctx.shadowBlur = this.attributes.getItem("shadowBlur").value;
        this.ctx.shadowOffsetX = this.attributes.getItem("shadowOffsetX").value;
        this.ctx.shadowOffsetY = this.attributes.getItem("shadowOffsetY").value;
        if (this.attributes.getProperty("rps") > 0) {
            this.ctx.save();
            this.ctx.translate(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2), this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2));
            this.ctx.rotate((this.attributes.getItem("rotateAngle").value) * Math.PI / 180);
            this.ctx.translate(-(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2)), -(this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2)));
        }
        this.ctx.fillRect(this.attributes.getItem("x").value, this.attributes.getItem("y").value, this.attributes.getItem("width").value, this.attributes.getItem("height").value);
        if (this.attributes.getProperty("rps") > 0) {
            this.ctx.restore();
        }
        //--the draw function
    }
    drawBorder() {
        //if(this.attributes.getItemValue("rps") > 0){console.log("totating border");}
        if (this.attributes.getProperty("rps") > 0) {
            this.ctx.save();
            this.ctx.translate(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2), this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2));
            this.ctx.rotate((this.attributes.getItem("rotateAngle").value) * Math.PI / 180);
            this.ctx.translate(-(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2)), -(this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2)));
        }
        this.drawRectangleBorder(this.attributes.getItem("x").value, this.attributes.getItem("y").value, this.attributes.getItem("width").value, this.attributes.getItem("height").value, this.attributes.getItem("borderColor").value, this.attributes.getItem("borderWidth").value);
        if (this.attributes.getProperty("rps") > 0) {
            this.ctx.restore();
        }
        //----------------------------    
    } //--draw border   
}

class SimpleRectangle extends BasePrimtive {
    constructor() {
        super("simpleRectangle");
    }
    draw() {
        this.ctx.fillStyle = this.attributes.getItem("fillStyle").value;
        this.ctx.strokeStyle = this.attributes.getItem("strokeStyle").value;
        this.ctx.shadowColor = this.attributes.getItem("shadowColor").value;
        this.ctx.shadowBlur = this.attributes.getItem("shadowBlur").value;
        this.ctx.shadowOffsetX = this.attributes.getItem("shadowOffsetX").value;
        this.ctx.shadowOffsetY = this.attributes.getItem("shadowOffsetY").value;
        if (this.attributes.getProperty("rps") > 0) {
            this.ctx.save();
            this.ctx.translate(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2), this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2));
            this.ctx.rotate((this.attributes.getItem("rotateAngle").value) * Math.PI / 180);
            this.ctx.translate(-(this.attributes.getItem("x").value + (this.attributes.getItem("width").value / 2)), -(this.attributes.getItem("y").value + (this.attributes.getItem("height").value / 2)));
        }
        this.ctx.fillRect(this.attributes.getItem("x").value, this.attributes.getItem("y").value, this.attributes.getItem("width").value, this.attributes.getItem("height").value);
        if (this.attributes.getProperty("rps") > 0) {
            this.ctx.restore();
        }
        //--the draw function
    }
}

class Circle extends BasePrimtive {
    constructor() {
        super("circle");
        this.attributes.add({ name: "radius", value: 100, comments: "" });
    }
    draw() {
        if (this.attributes.getProperty("drawBorder") === true) {
            this.drawBorder();
        }
        this.metal.drawCircle(this.attributes.getProperty("x"), this.attributes.getProperty("y"), this.attributes.getProperty("radius"));
        this.drawBorder();
    }
    //---------------------------------------  
    drawBorder() {
        this.metal.drawCircle(this.attributes.getProperty("x"), this.attributes.getProperty("y"), this.attributes.getProperty("radius") + 10);
        //----------------------------    
    } //--draw border   
}

class Triangle extends BasePrimtive {
    constructor() {
        super("triangle");
    }
    draw() {
        this.metal.drawTriangle(this.attributes.getProperty("x"), this.attributes.getProperty("y"), this.attributes.getProperty("width"), this.attributes.getProperty("height"), this.attributes.getProperty("fillStyle"));
        //this.metal.drawCircle(this.attributes.getProperty("x"),this.attributes.getProperty("y"),this.attributes.getProperty("radius"));    
    }
}

class Text extends BasePrimtive {
    constructor() {
        super("text");
        this.attributes.add({ name: "title", value: "Text" });
    }
    draw() {
        if (this.attributes.getProperty("drawBorder") === true) ;
        this.metal.drawText(this.attributes.getProperty("title"), this.attributes.getProperty("x"), this.attributes.getProperty("y"));
    }
}

class Complex extends BasePrimtive {
    constructor() {
        super("complex");
        this.circle = new Circle();
    }
    draw() {
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
}

class Elements {
    constructor() {
        this.shapes = [];
    }
    addRectangle() {
        const rectangle = new Rectangle();
        this.shapes.push(rectangle);
        return rectangle;
    }
    addComplex() {
        const complex = new Complex();
        this.shapes.push(complex);
        return complex;
    }
    addCircle() {
        const circle = new Circle();
        this.shapes.push(circle);
        return circle;
    }
    addText() {
        const text = new Text();
        this.shapes.push(text);
        return text;
    }
    addTriangle() {
        const triangle = new Triangle();
        this.shapes.push(triangle);
        return triangle;
    }
    addSimpleRectangle() {
        const simpleRectangle = new SimpleRectangle();
        this.shapes.push(simpleRectangle);
        return simpleRectangle;
    }
}

const leftCurtain = function (element, args = {}) {
    const local = {};
    const left = element.addSimpleRectangle();
    local.fillStyle = ifDefined(args, "fillStyle", "#3c544b");
    left.attributes.setSingleValue("fillStyle", local.fillStyle);
    local.x = args.fillStyle | 0;
    local.x = ifDefined(args, "x", 0);
    left.attributes.setSingleValue("x", local.x);
    local.y = ifDefined(args, "y", 0);
    local.height = ifDefined(args, "height", 600);
    left.attributes.setSingleValue("height", local.height);
    local.width = ifDefined(args, "width", 0);
    left.attributes.setSingleValue("width", local.width);
    local.fromSecond = 2;
    local.toSecond = 3;
    local.from = 3;
    local.to = 3;
    left.animationSequences.add({ valueName: "width", algo: "linear", fromSecond: [local.fromSecond], toSecond: [local.toSecond] }, ["width"], { valueName: "width", "from": args.from, "to": args.to });
    return element;
};
//----------------------- 
const ifDefined = function (args, item, alternative) {
    if (args.hasOwnProperty(item)) {
        return args[item];
    }
    else {
        return alternative;
    }
};

class Premades {
    constructor() {
    }
    get(name, element, args = {}) {
        switch (name) {
            case "leftCurtain":
                element = leftCurtain(element, args);
                break;
        }
        return element;
    }
}

class Bilzaa2d {
    constructor() {
        this.premades = new Premades();
        this.playHead = new PlayHead();
        this.elements = new Elements();
        this.animations = new Animations();
    }
    play() {
        this.playHead.play();
        this.gameLoop();
    }
    gameLoop() {
        //first element of the frame being drawn has to clear the canvas    
        this.elements.shapes[0].clearCanvasFlag = true;
        //----------the main loop
        this.elements.shapes.forEach(item => {
            const curSec = this.playHead.runningTime();
            item.setNextFrame(curSec);
            item.draw(curSec);
        });
        window.requestAnimationFrame(this.gameLoop.bind(this));
    } //play
} //class

module.exports = Bilzaa2d;
