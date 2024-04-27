type SignType = "plus" | "minus";

function signNumber(type: SignType) {
  return type === "plus" ? 1 : -1;
}

function numberWithSign(num: number, type: SignType | "none") {
  if (type === "none") {
    return 0;
  } else {
    return num * signNumber(type);
  }
}

console.log(numberWithSign(5, "plus"));
console.log(numberWithSign(5, "minus"));
console.log(numberWithSign(5, "none"));

function numberWithSign2(num: number, type: SignType | "none") {
  if (type === "none") {
    return 0;
  }
  return num * signNumber(type);
}

function numberWithSign3(num: number, type: SignType | "none") {
  return type === "none" ? 0 : num * signNumber(type);
}

type Animal = {
  tag: "animal";
  species: string;
};

type Human = {
  tag: "human";
  name: string;
};

type User = Animal | Human;

const tama: User = {
  tag: "animal",
  species: "Felis silvestris catus",
};

const uhyo: User = {
  tag: "human",
  name: "uhyo",
};

const alien: User = {
  tag: "alien",
  name: "gray",
};
