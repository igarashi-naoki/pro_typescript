const nameStr: string = "aaa";

const user = {
  nameStr,
  hoge: 1,
};

const newUser = {
  new: 2,
  ...user,
};
console.log(user);
console.log(newUser);
