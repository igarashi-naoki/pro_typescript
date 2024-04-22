function range(min: number, max: number): number[] {
  const result: number[] = [];

  for (let i: number = min; i <= max; i++) {
    result.push(i);
  }
  return result;
}

console.log(range(4, 7));

helloWorldTimes(5);
function helloWorldTimes(n: number): void {
  for (let i = 0; i < n; i++) {
    console.log("hello world");
  }
}
