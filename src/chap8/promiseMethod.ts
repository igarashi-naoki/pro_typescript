const p = Promise.resolve(100);
// /const p = Promise.reject();

p.then((value) => {
  console.log(value);
});

import { readFile } from "fs/promises";

const pFoo = readFile("foo.txt", "utf8");
const pBar = readFile("bar.txt", "utf8");
const pBaz = readFile("baz.txt", "utf8");

//const promise = Promise.all([pFoo, pBar, pBaz]);
const promise = Promise.race([pFoo, pBar, pBaz]);

promise.then((result) => {
  console.log("foo.txt:", result[0]);
  console.log("bar.txt:", result[1]);
  console.log("baz.txt:", result[2]);
});
