type Animal = {
  tag: "animal";
  species: string;
};

type Human = {
  tag: "human";
  name: string;
};

type User = Animal | Human;

///////////

type Option<T> = { tag: "some"; value: T } | { tag: "none" };

function showNumberIfExists(arg: Option<number>) {
  if (arg.tag === "some") {
    console.log(arg.value);
  }
}

const four: Option<number> = {
  tag: "some",
  value: 4,
};
const nothing: Option<number> = {
  tag: "none",
};

const aiueo: Option<string> = {
  tag: "some",
  value: "aiueo",
};

showNumberIfExists(four);
showNumberIfExists(nothing);

function isSome<T>(obj: Option<T>): obj is { tag: "some"; value: T } {
  return obj.tag === "some";
}

function showNumberIfExists2(arg: Option<number>) {
  if (isSome(arg)) {
    console.log(arg.value);
  }
}

function doubleOption(obj: Option<number>) {
  return mapOption(obj, (x) => x * 2);
}

// function mapOption<T>(obj: Option<T>, callback: (p: T) => T): Option<T> {
//   if (isSome(obj)) {
//     obj.value = callback(obj.value);
//   }
//   return obj;
// }

function mapOption<T, U>(obj: Option<T>, callback: (p: T) => U): Option<U> {
  switch (obj.tag) {
    case "some":
      return {
        tag: "some",
        value: callback(obj.value),
      };
    case "none":
      return {
        tag: "none",
      };
  }
}
console.log("practice 3");

console.log(doubleOption(four));
console.log(doubleOption(nothing));
