// type parameters

type User<T> = {
  name: string;
  child: T;
};

type Family<Parent, Child> = {
  mother: Parent;
  father: Parent;
  child: Child;
};

const obj: Family<string, number> = {
  mother: "mother",
  father: "daddy",
  child: 100,
};
