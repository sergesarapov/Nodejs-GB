const request = require("request");
const cheerio = require("cheerio");

request("https://yandex.ru/", (err, req, html) => {
  if (!err) {
    const $ = cheerio.load(html);
    for (let i = 1; i <= 5; i++) {
      if ($(".news__item-content").eq(i).text().includes("Путин")) {
        console.log(
          "Тут про Путина!!!! -->",
          $(".news__item-content").eq(i).text()
        );
      } else {
        console.log($(".news__item-content").eq(i).text());
      }
    }
  } else {
    console.log(err);
  }
});
