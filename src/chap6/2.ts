type FooString = "foo";

const foo: FooString = "foo";
const bar: FooString = "bar";

const one: 1 = 1;

function getHelloStr(): `Hello, ${string}!` {
  const rand = Math.random();
  if (rand < 0.3) {
    return "Hello, world!";
  } else if (rand < 0.6) {
    return "Hello, my world!";
  } else if (rand < 0.9) {
    return "Hello, world";
  } else {
    return "Hell, world!";
  }
}

function makeKey<T extends string>(userName: T) {
  return `user:${userName}` as const;
}

const uhyoKey: "user:uhyo" = makeKey("uhyo");

function signNumber(type: "plus" | "minus") {
  return type === "plus" ? 1 : -1;
}

console.log(signNumber("plus"));
console.log(signNumber("minus"));

console.log(signNumber("uhyo"));
