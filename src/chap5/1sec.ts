class User<T> {
  static adminName: string = "uhyo";
  // static getAdminUser(): User {
  //   return new User(User.adminName, 26);
  // }

  readonly name: string = "";
  #age: number;
  hobby?: string;
  readonly data: T;

  constructor(name: string, age: number, data: T) {
    this.name = name;
    this.#age = age;
    this.data = data
  }
  isAdult(): boolean {
    return this.#age >= 20;
  }

  setAge(newAge: number): void {
    this.#age = newAge;
  }
}

const uhyo = new User("uhyo", 26, "追加データ");
const uhyo2 = new User<{ num: number }>("uhyo", 26, { num: 123});

console.log(uhyo);
console.log(uhyo2);


const User2 = class {
  constructor(public readonly name: string = "11", private age?: number) {}
};


class User3 { 
  static adminUser: User3;
  static {
    this.adminUser = new User3();
    this.adminUser.#age = 9999;
  }

  #age: number = 0;

  getAge() {
    return this.#age
  }

  setAge(age: number ){
    if(age < 0 || age > 150){
      return}
    this.#age = age;
  }
}

console.log(User3.adminUser.getAge())