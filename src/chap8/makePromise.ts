import { resolve } from "path";

const p = new Promise<number>((resolve) => {
  setTimeout(() => {
    resolve(100);
  }, 3000);
});

p.then((num) => {
  console.log(`結果は${num}`);
});

const sleep = (duration: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(resolve, duration);
  });
};

const sleepReject = (duration: number) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(reject, duration);
  });
};

sleep(3000).then(() => {
  console.log("3秒経ちました");
});

sleepReject(3000)
  .then(() => {
    console.log("Reject 3秒経ちました");
  })
  .catch(() => {
    console.log("Reject 失敗");
  });
