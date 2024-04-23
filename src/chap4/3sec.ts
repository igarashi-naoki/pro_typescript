type HasName = {
  name: string;
};

type HasNameAndAge = {
  name: string;
  age: number;
};

const fromAge = (age: number): HasNameAndAge => ({
  name: "John, Smith",
  age,
});

const f: (age: number) => HasName = fromAge;
const obj: HasName = f(100);

const showName = (obj: HasName) => {
  console.log(obj);
};

const g: (obj: HasNameAndAge) => void = showName;

g({
  name: "John, Smith",
  age: 26,
});
