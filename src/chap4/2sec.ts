const strRepeat = (num: number, str: string): string => str.repeat(num);

const resetFunc = (num?: number, ...numRest: number[]): void =>
  console.log(num);

type F = (repeatNum: number) => string;

const xRepeat: F = (num: number): string => "x".repeat(num);

xRepeat(1);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const arr2 = numbers.filter((x) => x % 3 === 0);

type MyFunc = {
  isUsed?: boolean;
  (arg: number): void;
};

const double: MyFunc = (arg: number) => {
  console.log(arg * 2);
};
