const repeat = function <T>(elm: T, length: number): T[] {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(elm);
  }
  return result;
};

console.log(repeat<string>("a", 3));
console.log(repeat<number>(2, 3));

const repeat2 = <T>(elm: T, length: number): T[] => {
  const result: T[] = [];
  for (let i = 0; i < length; i++) {
    result.push(elm);
  }
  return result;
};

const pair = <Left, Right>(left: Left, right: Right): [Left, Right] => [
  left,
  right,
];

console.log(pair<string, number>("aaa", 4));

type Func = <T>(arg: T, length: number) => T[];

const repeat3: Func = (elm, length) => {
  const result = [];
  for (let i = 0; i < length; i++) {
    result.push(elm);
  }
  return result;
};
