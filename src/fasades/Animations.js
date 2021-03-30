import Linear from "../animations/Linear.js";
export default class Animations {
    constructor() {
        this.data = [];
    }
    testAnimation() {
        const l = new Linear({ attributeToAnimate: "x", fromSecond: 0, toSecond: 400 });
        this.data.push(l);
        return true;
    }
}
