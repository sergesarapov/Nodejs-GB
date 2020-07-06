const EventEmitter = require("events").EventEmitter;

class Kettle extends EventEmitter {
  constructor() {
    super();
    process.nextTick(() => {
      this.emit("created");
    });
  }
  start() {
    setTimeout(() => {
      this.emit("ready", "Hello world");
    }),
      1000;
  }
}

const k = new Kettle();
k.on("created", () => {
  console.log("created");
});

k.start();

k.on("ready", (e) => {
  console.log(e);
});
