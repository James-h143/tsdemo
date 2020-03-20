//@ts-check

class Person2{
    constructor(fname,lname){
        /** @private */
        this.firstName = fname;
        /** @private */
        this.lastName = lname;
        /** @public */
        this.fullName = `${fname} ${lname}`;
    }
}

const jamesh = new Person2('James', 'Hennigan');

console.log(jamesh.firstName);
console.log(jamesh.lastName);
console.log(jamesh.fullName);