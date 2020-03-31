let money = 1000;
let income = "freelance";
let addExpenses = "Internet, taxi, computer";
let deposit = true;
let mission = 1000000;
let period = 6;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log(addExpenses.length);

console.log("Период равен " + period + " месяцев");
console.log("Цель заработать " + mission + " рублей/долларов/гривен/юани");

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(", "));

let budgetDay = (money / 30);
console.log(budgetDay)