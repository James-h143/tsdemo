const { readFile } = require("fs").promises;
const fileContents = await readFile(`${__dirname}/file.txt`, "utf-8");

async function test() {
  console.log("fileContents");
}

async function hello() {
  console.log("hello world!");
}

export { test, hello };
