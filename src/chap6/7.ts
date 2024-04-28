type HasToString = {
  toString: () => string;
};

function useToString1(value: HasToString & object) {
  console.log(`value is ${value.toString()}`);
}

useToString1({
  toString() {
    return "foo!";
  },
});

useToString1(3.14);

function isStringOrNumber(value: unknown): value is string | number {
  return typeof value === "string" || typeof value === "number";
}

const something: unknown = 123;

if (isStringOrNumber(something)) {
  console.log(something.toString());
}

type Human = {
  type: "Human";
  name: string;
  age: number;
};

function isHuman(value: any): value is Human {
  if (value == null) return false;

  return (
    value.type === "Human" &&
    typeof value.name === "string" &&
    typeof value.age === "number"
  );
}

type NumberAndStrings = [number, ...string[]];

type RestArgs<M> = M extends "string"
  ? [string, string]
  : [number, number, number];

function func<M extends "string" | "number">(mode: M, ...args: RestArgs<M>) {
  console.log(mode, ...args);
}

func("string", "aaa", "bbb");
func("string", "aaa", "bbb", "ccc");

func("number", 1111, 2222, 333);
func("number", 1111, 2222);

type T = Readonly<{
  name: string;
  age: number;
}>;

type T2 = Pick<Human, "type" | "name">;
