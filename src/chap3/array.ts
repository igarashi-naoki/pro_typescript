const arr: number[] = [1, 2, 3, 4];

//const arr2: string[] = [3, 4];

const arr3: Array<{ name: string }> = [
  { name: "Alice" },
  { name: "Bob" },
  { name: "Cap" },
];

const arr4: (string | number | boolean)[] = [1, "test", false];

const arr5: readonly number[] = [1, 2, 3];

//arr5[1] = 100;
//arr5.push(6);
arr.push(6);

arr5.includes(2);

console.log(arr5);
