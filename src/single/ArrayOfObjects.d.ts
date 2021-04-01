/** WHAT INTERFACE THE STORED OBJECT SHOULD HAVE:
 * 1--every objects must have a unique string "name"  field
 * 2--every OBJECT MUST NNOOTT HAVE "value" field.--we can use any property
 * 3-- the data array is public since its just a helpful array dont make it more compelx.
 */
export default class ArrayOfObjects {
    data: {}[];
    constructor();
    add(incomming?: {}): {};
    isUnique(name: string): boolean;
    get length(): number;
    getItem(name: string): {};
    getProperty(name: string, value?: string): any;
    setProperty(name: string, value: string | number, propertyName?: string): {};
    getAllByNames(argumentsRequired?: never[]): any[];
    insertPropertiesFromArray(retData: any): boolean;
    setAllProperties(propertyName: string, newValue: string | number): void;
    getItemsByNames(argumentsRequired?: never[]): any[];
}
//# sourceMappingURL=ArrayOfObjects.d.ts.map