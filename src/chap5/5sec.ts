console.log("errorを発生させる");
throwError();
console.log("errorを発生させました");

function throwError() {
  const error = new Error("エラーが発生しました！");
  throw error;
}
