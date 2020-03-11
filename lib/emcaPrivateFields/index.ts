export default class Person{
    #firstNameHardPriv: string;
    #lastNameHardPriv:string;
    private firstNameSoftPriv:string;
    private lastNameSoftPriv:string;
    public fullName: string
    constructor(fname: string, lname: string){
        this.#firstNameHardPriv = fname;
        this.#lastNameHardPriv = lname;
        this.firstNameSoftPriv = fname;
        this.lastNameSoftPriv = lname;
        this.fullName = `${this.#firstNameHardPriv} ${this.#lastNameHardPriv}`;
    }
    getFirstName():string{
        return this.#firstNameHardPriv;
    }
    getSecondName(): string{
        return this.#lastNameHardPriv;
    }
}