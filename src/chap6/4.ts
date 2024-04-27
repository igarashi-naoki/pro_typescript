type Human = {
  type: "human";
  name: string;
  age: number;
};

function setAge(human: Human, age: Human["age"]) {
  return {
    ...human,
    age,
  };
}

const uhyo: Human = {
  type: "human",
  name: "uhyo",
  age: 26,
};

const uhyo2 = setAge(uhyo, 27);
console.log(uhyo2);

type HumanKeys = keyof Human;

let key: HumanKeys = "name";
key = "age";
key = "hoge";

const mmConversionTable = {
  mm: 1,
  m: 1e3,
  km: 1e6,
};

function convertUnits(value: number, unit: keyof typeof mmConversionTable) {
  //function convertUnits(value: number, unit: any) {
  const mmValue = value * mmConversionTable[unit];
  return {
    mm: mmValue,
    m: mmValue / 1e3,
    km: mmValue / 1e6,
  };
}
console.log(convertUnits(5600, "m"));

function get<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const uhyoName = get<Human, "name">(uhyo, "name");
