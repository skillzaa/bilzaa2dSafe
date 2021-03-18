import AooBase from "./AooBase.js";
export default class AttributesAoo extends AooBase {
    constructor() {
        super();
    }
    add(incomming = {}) {
        this.data.push(incomming);
        return incomming;
    }
    saveAttributeValues(retData) {
        this.data.forEach(bd => {
            retData.forEach(ag => {
                if (ag.name == bd.name) {
                    bd.value = ag.value;
                }
            });
        });
        return true;
    } //..
    getAttributesByName(argumentsRequired = []) {
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
}
