class User {
  private name: string;
  private age: number;

  constructor(name: string, age: number) {
    if (name === "") {
      throw new Error("名前はからにできません");
    }
    this.name = name;
    this.age = age;
  }

  public getMessage(message: string): string {
    return `${this.name}(${this.age}) 「${message}」`;
  }
}

try {
  const uhyo = new User("", 26);

  console.log(uhyo.getMessage("hello"));
} catch (error) {
  console.log(error);
}
