import Person from './lib/emcaPrivateFields/index.ts'

async function main(){
    const person = new Person('James','Hennigan')
    console.log('person.fullName is: '+ person.fullName);

    try{
    //@ts-ignore
    console.log('person.firstNameHardPriv is: '+ person.#firstNameHardPriv);
    //@ts-ignore
    console.log('person.lastNameHardPriv is: '+ person.#lastNameHardPriv);
    }catch(e){
        console.log(e.message);
    };

    //@ts-ignore
    console.log('person.firstNameSoftPriv is: '+ person.firstNameSoftPriv);
    //@ts-ignore
    console.log('person.lastNameSoftPriv is: '+ person.lastNameSoftPriv);


    console.log('person.getFirstName() is: '+person.getFirstName());

    console.log('person.getSecondName() is: '+person.getSecondName());

    // try{
    //     class NewPerson extends Person {
    //         getProtectedFirstName(){
    //             //@ts-ignore
    //             return this.#firstNameHardPriv
    //         }
    //     }
    //     console.log(new NewPerson('James','Hennigan').getProtectedFirstName());
    // }
};
main();