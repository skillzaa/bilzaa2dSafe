export default class AooBase {
    constructor() {
        this.data = [];
    }
    add() {
    }
    push(a) {
        return this.data.push(a);
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
    getItemValue(name) {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx].value;
            }
        }
        return false;
    }
    setValue(name, value) {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                this.data[idx].value = value;
                return this.data[idx];
            }
        }
    } //......
    setSingleValue(name, value) {
        this.data.forEach(bd => {
            if (name === bd.name) {
                bd.value = value;
            }
        });
        return true;
    } //..
}
