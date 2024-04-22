const toLowerOrUpper = (str: string, upper?: boolean): string => {
  if (upper) {
    return str.toUpperCase();
  } else {
    return str.toLowerCase();
  }
};

// callback

type User = { name: string; age: number };
const getName = (u: User): string => u.name;
const users: User[] = [
  { name: "uhyo", age: 26 },
  { name: "john", age: 15 },
];

const names = users.map(getName);
console.log(names);

const names2 = users.map((u: User): string => u.name);
