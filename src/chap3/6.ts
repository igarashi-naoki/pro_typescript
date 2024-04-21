//destructing Assignment
const arr: number[] = [1, 2, 3, 4];

const [a, , b, c, d] = arr;

console.log(a, b, c, d);

const obj = {
  str: "hello world",
  num: 123,
};

const { str, num } = obj;
console.log(str, num);
//const { foo } = obj;

const nested = {
  num2: 123,
  obj: {
    foo: "hello",
    bar: "world",
    num2: 567,
  },
};

const {
  num2,
  obj: { foo, bar, num2: num3 },
} = nested;

console.log(num2, foo, bar, num3);
