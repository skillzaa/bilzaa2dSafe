import Linear from "../animations/Linear.js";
export default class Animations {
    constructor() {
        this.data = [];
    }
    testAnimation() {
        const l = new Linear({ attributeToAnimate: "x", fromSecond: 1, toSecond: 10 }, ['height'], { from: 1, to: 400 });
        this.data.push(l);
        return true;
    }
}
