import leftCurtain from "./leftCurtain.js";
export default class Premades {
    constructor() {
    }
    get(name, element, args = {}) {
        switch (name) {
            case "leftCurtain":
                element = leftCurtain(element, args);
                break;
            default:
                break;
        }
        return element;
    }
}
//# sourceMappingURL=Premades.js.map