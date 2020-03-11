class Person{
    #firstname;
    constructor(){
        this.#firstname = 'james';
        console.log('initialised with "james"');
    }
}

const james = new Person();
console.log('got this far');
//@ts-ignore
console.log(james.#firstname);