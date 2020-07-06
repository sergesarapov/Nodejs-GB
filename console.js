console.error("hello world");
console.time("loop");
let res = 10;
for (let index = 0; index < 10000; index++) {
  res += Math.pow(1, index);
}
console.timeEnd("loop");
