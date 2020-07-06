const ansi = require("ansi");
const cursor = ansi(process.stdout);
const gen = require("color-generator");

const interval = setInterval(() => {
  const bgColor = gen().hexString();
  const color = gen().hexString();

  cursor
    .hex(color)
    .bg.hex(bgColor)
    .write("Diman - #$%@&")
    .bg.reset()
    .reset()
    .write("\n");

  //cursor.beep();
}, 100);

setTimeout(() => {
  clearInterval(interval);
}, 5000);
