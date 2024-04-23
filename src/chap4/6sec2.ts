function map<T, U>(array: T[], callback: (n: T) => U): U[] {
  const result: U[] = [];
  for (const i of array) {
    result.push(callback(i));
  }

  return result;
}

const data = [1, 1, 2, 3, 5, 8, 13];
const data2 = [1, -3, -2, 8, 0, -1];

const result: boolean[] = map(data2, (x) => x >= 0);
console.log(result);
