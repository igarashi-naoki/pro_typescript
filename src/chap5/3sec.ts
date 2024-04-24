type HasName = {
  name: string;
};

class User implements HasName {
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

class PremiumUser extends User {
  rank: number = 1;
  constructor(name: string, age: number, rank: number) {
    super(name, age);
    this.rank = rank;
  }
  public isAdult(): boolean {
    return true;
  }
}

const uhyo = new PremiumUser("uhyo", 15, 2);

console.log(uhyo.rank);
console.log(uhyo.isAdult());
