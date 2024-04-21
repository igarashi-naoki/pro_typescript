type User = {
  name: string;
  age: number;
  premiumUser: boolean;
};

const data: string = `
uhyo,26,1
John Smith,17,0
Mary Sue,14,0
`;
const users: Array<User> = [];

for (const line of data.split("\n")) {
  if (!line) continue;

  const [name, age, premiumUser] = line.split(",");
  users.push({ name, age: Number(age), premiumUser: !!premiumUser });
}

console.log(data.split("\n"));

console.log(users.length);
for (const user of users) {
  if (user.premiumUser) {
    console.log(`${user.name} (${user.age})はプレミアムユーザーです。`);
  } else {
    console.log(
      `${user.name} (${user.age})はプレミアムユーザーではありません。`
    );
  }
}
