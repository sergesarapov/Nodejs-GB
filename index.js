const ansi = require("ansi");
const cursor = ansi(process.stdout);
const gen = require("color-generator");

const bgColor = gen().hexString();
const color = gen().hexString();

cursor
  .hex(color)
  .bg.hex(bgColor)
  .write("Hello World")
  .bg.reset()
  .reset()
  .write("\n");

cursor.beep();
