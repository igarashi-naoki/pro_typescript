function getFirstFiveLetters(strOrNum: string | number) {
  const str = strOrNum as string;
  console.log(str);
  return str.slice(0, 5);
}

console.log(getFirstFiveLetters("qwertyuiop"));
console.log(getFirstFiveLetters(11111));

type Animal = {
  tag: "animal";
  species: string;
};

type Human = {
  tag: "human";
  name: string;
};

type User = Animal | Human;

function getNamesIfAllHuman(users: readonly User[]): string[] | undefined {
  if (users.every((user) => user.tag === "human")) {
    return (users as Human[]).map((user) => user.name);
  }

  return undefined;
}

const names = ["uhyo", "john", "Taro"];
const names2 = ["uhyo", "john", "Taro"] as const;

names.push("uhyo");
names2.push("uhyo");

type Name = typeof names2[number];
