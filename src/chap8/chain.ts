import { readFile } from "fs/promises";

const p = readFile("foo.txt", "utf8");

//const p2 = p.then((result) => result + result);
const p2 = p.catch(() => "");

p2.then((result) => {
  console.log(result);
});

readFile("bar.txt", "utf8")
  .finally(() => {
    console.log("txt is loaded?");
  })
  .catch(() => "error")
  .then((result) => repeat10(result))
  .then((result) => {
    console.log(result);
  });

const repeat10 = (str: string) =>
  new Promise<string>((resolve) => {
    setTimeout(() => resolve(str.repeat(10)), 1000);
  });
