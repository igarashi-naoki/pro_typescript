type Item = { name: string; price: number };

const apple: Item = { name: "りんご", price: 150 };

// const orange: apple = {
//   name: "みかん",
//   price: 150,
// };
//console.log(Item);

class User {
  name: string = "";
  age: number = 0;
}

const uhyo = new User();

console.log(uhyo instanceof User);
console.log({} instanceof User);
