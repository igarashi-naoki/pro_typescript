type Human = {
  height: number;
  weight: number;
};

// const calcBMI = ({ height, weight }: Human) => {
//   return weight / height ** 2;
// };

const calcBMI = ({ height, weight }: Human): number => weight / height ** 2;

const uhyo: Human = { height: 1.84, weight: 72 };

console.log(calcBMI(uhyo));

const obj = {
  double(num: number): number {
    return num * 2;
  },
  double2: (num: number): number => num * 2,
};

const sum = (...args: number[]): number => {
  let result = 0;
  for (const arg of args) {
    result += arg;
  }
  return result;
};

const arr: number[] = [3, 4, 5, 6];
console.log(sum(...arr));

console.log(sum(1, 2, 3));
console.log(sum());
