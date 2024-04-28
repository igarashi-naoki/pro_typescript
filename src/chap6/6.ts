function doNothing(val: unknown) {
  console.log(val);
  console.log(val.name);
}

doNothing(3);
doNothing({ a: 123, b: "ABC" });
