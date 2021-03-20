/** WHAT INTERFACE THE STORED OBJECT SHOULD HAVE:
 * 1--every objects must have a unique string "name"  field
 * 2--every OBJECT MUST NNOOTT HAVE "value" field.--we can use any property
 * 3-- the data array is public since its just a helpful array dont make it more compelx.
 */
//export default class ArrayOfObjects {
 class ArrayOfObjects {
    constructor() {
        this.data = [];
    }
    add(name) {
        if (this.isUnique(name) === true) {
            const a = {};
            a.name = name;
            this.data.push(a);
            return a;
        }
        else {
            return { success: false, message: "Please Provide a unique and valid string name for the object", errorMessage: "nonUniqueName" };
        }
    }
    isUnique(name) {
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
    getItemProperty(name, propertyName) {
        for (let idx = 0; idx < this.data.length; idx++) {
            if (this.data[idx].name === name) {
                return this.data[idx].value;
            }
        }
        return false;
    }
    setItemProperty(name, value) {
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

module.exports = ArrayOfObjects;