const getFizzBuzzString = (i: number): string | number => {
  if (i % 3 === 0 && i % 5 === 0) {
    return "FizzBuzz";
  } else if (i % 3 === 0) {
    return "Fizz";
  } else if (i % 5 === 0) {
    return "Buzz";
  } else {
    return i;
  }
};

const sequence = (min: number, max: number): number[] => {
  const result: number[] = [];
  while (min <= max) {
    result.push(min);
    min++;
  }
  return result;
};

for (const i of sequence(1, 100)) {
  const message = getFizzBuzzString(i);
  console.log(message);
}
