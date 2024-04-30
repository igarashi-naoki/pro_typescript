import { readFile } from "fs";
import { performance } from "perf_hooks";

const startTime = performance.now();
readFile("./src/chap8/foo.txt", "utf8", (err, result) => {
  console.log(result);
  const endTime = performance.now();

  console.log(`${endTime - startTime}msかかりました`);
});
console.log("読み込み開始");
