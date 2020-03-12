//@ts-check

class Person{
    constructor(fname,lname){
        /** @private */
        this.firstName = fname;
        /** @private */
        this.lastName = lname;
        /** @public */
        this.fullName = `${fname} ${lname}`;
    }
}

const james = new Person('James', 'Hennigan');

console.log(james.firstName);
console.log(james.lastName);
console.log(james.fullName);