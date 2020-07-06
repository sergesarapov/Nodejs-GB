const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const cards = [
  6,
  6,
  6,
  6,
  7,
  7,
  7,
  7,
  8,
  8,
  8,
  8,
  9,
  9,
  9,
  9,
  10,
  10,
  10,
  10,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  11,
  11,
  11,
  11,
];

let playerCount = 0;
let casinoCount = 0;
function playBlackJack() {
  const randomCard = cards[Math.floor(Math.random() * cards.length)];
  return randomCard;
}
function clearCount() {
  playerCount = 0;
  casinoCount = 0;
}
console.log(
  'Сыграем в 21? \n Напиши "взять", чтобы вытянуть карту и "харэ", чтобы проверить, обыграл ли ты банкующего. \n Чтобы выйти из игры напиши "ухожу".'
);

rl.on("line", (cmd) => {
  if (cmd === "взять") {
    playerCount += playBlackJack();
    if (casinoCount < 17) {
      casinoCount += playBlackJack();
    }
    console.log(`Ваш счет: ${playerCount}.`);
    if (playerCount === 21 && casinoCount !== 21) {
      console.log("Победа! Настоящий БлэкДжек");
      clearCount();
    }
    if (playerCount !== 21 && casinoCount === 21) {
      console.log(
        `Казино выиграло! Ваш счет: ${playerCount}. Счет казино:  ${casinoCount}`
      );
      clearCount();
    }
    if (playerCount > 21) {
      console.log(
        `Перебор, бродяга! Ваш счет: ${playerCount}. Счет казино:  ${casinoCount}`
      );
      clearCount();
    }
  }
  if (cmd === "харэ") {
    if (casinoCount < 17) {
      do {
        casinoCount += playBlackJack();
      } while (casinoCount < 17);
    }
    if (casinoCount > 21 || playerCount > casinoCount) {
      console.log(
        `Победа! Ваш счет: ${playerCount}. Счет казино:  ${casinoCount}`
      );
      clearCount();
    }
    if (playerCount < casinoCount && casinoCount <= 21) {
      console.log(
        `Проиграл...Ваш счет: ${playerCount}. Счет казино:  ${casinoCount}`
      );
      clearCount();
    }
    if (playerCount === casinoCount && playerCount > 0 && casinoCount > 0) {
      console.log("Ничья!");
      clearCount();
    }
  }
  if (cmd === "ухожу") {
    rl.close();
  }
});
