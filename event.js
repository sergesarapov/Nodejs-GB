const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World");
  }, 1000);
});
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});
// promise
//   .then(
//     () => {},
//     () => {}
//   )
//   .catch(() => {});

// promise
//   .then((e) => {
//     console.log(e);

//     return promise1;
//   })
//   .then(() => {
//     return promise2;
//   })
//   .then(() => {
//   }).catch(()=>{

//   })

async function asyncFun() {
  const result = await promise;
  const result1 = await promise1;
  const result2 = await promise2;
}
