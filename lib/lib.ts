const { readFile } = require("fs").promises;
const fileContents = await readFile(`${__dirname}/file.txt`, "utf-8");

export async function test() {
  console.log(fileContents);
}

export async function hello() {
  console.log("hello world!");
}
