import { readFile } from "fs/promises";

const p1 = readFile("foo.txt", "utf8");
const p2 = p1.then((result) => {
  throw new Error("Error!!!!");
});

p2.then(
  (result) => {
    console.log(result);
  } //,
  // () => {
  //   console.log("error");
  // }
).catch((error) => {
  console.log("エラーが発生しました");
});
