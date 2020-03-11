import testClass from './lib/emcaPrivateFields/index.ts'

async function main(){
    const person = new testClass('James','Hennigan')
    console.log('person.fullName is: '+ person.fullName);

    //@ts-ignore
    console.log('person.firstNameHardPriv is: '+ person.#firstNameHardPriv);
    //@ts-ignore
    console.log('person.lastNameHardPriv is: '+ person.#lastNameHardPriv);

    //@ts-ignore
    console.log('person.firstNameSoftPriv is: '+ person.firstNameSoftPriv);
    //@ts-ignore
    console.log('person.lastNameSoftPriv is: '+ person.lastNameSoftPriv);


    console.log('person.getFirstName() is: '+person.getFirstName())

    console.log('person.getSecondName() is: '+person.getSecondName())
};
main();