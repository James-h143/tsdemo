import { obj } from './lib/exportAllAs/index.ts'

async function main(){
    obj.func1();
    obj.func2();
    console.log(obj.variable1);
    console.log(obj.variable2);
}
main().catch(e=>console.log(e));