/** WHAT INTERFACE THE STORED OBJECT SHOULD HAVE:
 * 1--every objects must have a unique string "name"  field
 * 2--every OBJECT MUST NNOOTT HAVE "value" field.--we can use any property
 * 3-- the data array is public since its just a helpful array dont make it more compelx.
 */
export default class ArrayOfObjects {
    data: {}[];
    constructor();
    add(): number;
    insert(a: {}): number | false;
    isUnique(name: string): void;
    push(a: {}): void;
    get length(): number;
    getItem(name: string): {};
    getProperty(name: string, propertyName: string): any;
    setProperty(name: string, value: string | number): {};
    setAllProperties(propertyName: string, newValue: string | number): void;
}
//# sourceMappingURL=ArrayOfObjects.d.ts.map