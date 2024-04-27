type Animal = {
  species: string;
  age: number;
};
// type Human = Animal & {
//   name: string;
// };

// type User = Animal | Human;

// const tama: User = {
//   species: "Felis silvertris catus",
// };

// const uhyo: User = {
//   name: "uhyo",
// };

type StringAndNumber = string & number;

type Human = {
  name: string;
  age?: number;
  //age: number | undefined;
};

const uhyo: Human = {
  name: "uhyo",
  age: 25,
};

const john: Human = {
  name: "John Smith",
  age: undefined,
};

function useMaybeHuman(human: Human | undefined) {
  const age = human?.age;
  console.log(age);
}
