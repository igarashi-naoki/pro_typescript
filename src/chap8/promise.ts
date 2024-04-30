import { readFile } from "fs/promises";

const p = readFile("./src/chap8/fooa.txt", "utf8");

p.then((data) => {
  console.log(data);
});

p.then((data) => {
  console.log("2");
});
p.then((data) => {
  console.log("3");
});

p.catch((error: unknown) => {
  console.log("error", error);
});

p.finally(() => {
  console.log("finished");
});
