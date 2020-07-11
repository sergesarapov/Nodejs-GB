const request = require("request");
const readline = require("readline");

const yaKey =
  "trnsl.1.1.20190519T185532Z.356b4af839e1512f.982f8e26d341c0543e4ea6d3c9965ccc98d0977b";
const urlYandexTr = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${yaKey}&lang=en-ru&text=`;
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Переводчик Серёги. \nНабери слово на английском языке, и эта хуйня её переведет. \nЗаебешься - пиши exit."
);
rl.on("line", (cmd) => {
  request(urlYandexTr + cmd, (err, req, html) => {
    if (cmd === "exit") {
      rl.close();
    } else {
      if (!err) {
        console.log(cmd, "-->", JSON.parse(html).text.join(" "));
      } else {
        console.log(err);
      }
    }
  });
});
