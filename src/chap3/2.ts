type MyObj = {
  foo: boolean;
  bar: boolean;
  baz?: number;
};

const obj: MyObj = { foo: false, bar: true };
const obj2: MyObj = { foo: true, bar: false, baz: 123 };

//const obj3: MyObj = { foo: false };

console.log(obj.bar);
console.log(obj2.baz);
//console.log(obj2.baz * 1000);

if (obj2.baz !== undefined) {
  console.log(obj2.baz * 1000);
}
