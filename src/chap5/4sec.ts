import { time } from "console";

class User {
  name: string;
  #age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.#age = age;
  }

  public isAdult(): boolean {
    return this.#age >= 20;
  }
}

const uhyo = new User("uhyo", 26);
const jhon = new User("jhon", 16);

console.log(uhyo.isAdult === jhon.isAdult);

const user = {
  name: "uhyo",
  age: 26,
  isAdult() {
    return this.age >= 20;
  },
};

console.log(user.isAdult());

console.log(uhyo.isAdult.apply(jhon, []));
console.log(Reflect.apply(uhyo.isAdult, jhon, []));

const boundIsAdult = uhyo.isAdult.bind(uhyo);
console.log(boundIsAdult());
console.log(boundIsAdult.call(jhon));

class RepeatArray<T> extends Array<T> {
  repeat(times: number): RepeatArray<T> {
    const result = new RepeatArray<T>();

    for (let i = 0; i < times; i++) {
      result.push(...this);
    }
    return result;
  }
}

const arr = new RepeatArray(1, 2);
arr.push(3);

console.log(arr.repeat(3));
