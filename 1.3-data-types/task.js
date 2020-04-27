"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  // код для задачи №1 писать здесь
  // return totalAmount;
  percent /= 100;
  let percentPerMonth = percent / 12;
  let totalAmount;

  if (typeof percent != "number") {
    return (totalAmount = `Параметр 'Процентная ставка' содержит неправильное значение ${percent}`);
  }
  if (typeof contribution != "number") {
    return (totalAmount = `Параметр 'Начальный взнос' содержит неправильное значение ${contribution}`);
  }
  if (typeof amount != "number") {
    return (totalAmount = `Параметр 'Сумма кредита' содержит неправильное значение ${amount}`);
  }

  let creditBoody = amount - contribution;

  let month = (date.getFullYear() - new Date().getFullYear()) * 12;
  month += date.getMonth();
  month -= new Date().getMonth();

  let payment =
    creditBoody *
    (percentPerMonth +
      percentPerMonth / (Math.pow(1 + percentPerMonth, month) - 1));

  totalAmount = payment * month;
  console.log(totalAmount);

  return totalAmount;
}

function getGreeting(name) {
  // код для задачи №2 писать здесь
  // return greeting;
  let greeting;
  name ? (greeting = `Привет, мир! Меня зовут ${name}`) : (name = "Аноним");
  greeting = `Привет, мир! Меня зовут ${name}`;
  return greeting;
}
