/** WHAT INTERFACE THE STORED OBJECT SHOULD HAVE:
 * 1--every objects must have a unique string "name"  field
 * 2--every OBJECT MUST NNOOTT HAVE "value" field.--we can use any property
 * 3-- the data array is public since its just a helpful array dont make it more compelx.
 */
export default class ArrayOfObjects {
    constructor() {
        this.data = [];
    }
    add() {
        const a = {};
        //a.name =     
        return this.data.push(a);
    }
    insert(a) {
        if (typeof a.name === "undefined") {
            return false;
        }
        const isUnique = this.isUnique(a.name);
        return this.data.push(a);
    }
    isUnique(name) {
        const ret = this.data.forEach(element => {
            if (element.name === name) {
                return false;
            }
        });
        return ret;
    }
    push(a) {
        this.add(a);
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
    getProperty(name, propertyName) {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx].value;
            }
        }
        return false;
    }
    setProperty(name, value) {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                this.data[idx].value = value;
                return this.data[idx];
            }
        }
        return true;
    } //......
    setAllProperties(propertyName, newValue) {
    }
}
