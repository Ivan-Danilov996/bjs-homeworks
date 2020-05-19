'use strict';

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(500); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return (sum += +arg);
  }, 0);
}

function compareArrays(arr1, arr2) {
  return (
    arr1.length === arr2.length &&
    arr1.every((element, index) => element === arr2[index])
  );
}

class History {
  constructor(args, result) {
    (this.args = args), (this.result = result);
  }
}

function memorize(fn, limit) {
  const memory = [];

  return function func(...args) {
    //сравниваем массивы
    const compare = memory.find((element) => compareArrays(element.args, args));
    //если находим одинаковый массив, возвращаем результат найденного массива
    if (compare) {
      return compare.result;
    }

    //записываем в новый объект аргументы и результат
    const obj = new History(args, fn(...args));
    //пушим в массив новый объект
    if (memory.length >= limit) {
      memory.shift();
    }
    memory.push(obj);
    //возвращаем результат выполнения функции
    return obj.result;
  };
}

const mSum = memorize(sum, 5);

/*
console.log(mSum(3, 4)) 
console.log(mSum(3, 4))
console.log(mSum(3, 5))
console.log(mSum(3, 6)) 
console.log(mSum(3, 7)) 
console.log(mSum(3, 8)) 
console.log(mSum(3, 4))  
*/

function testCase(testFunction, timer) {
  const testArr = [
    [1, 2, 3],
    [1, 2],
    [1, 2, 3],
    [1, 2],
    [9, 5, 2, 4],
  ];

  console.time(timer);

  let i = 0;
  while (i < 100) {
    testArr.forEach((element) => console.log(testFunction(...element)));
    i++;
  }

  console.timeEnd(timer);
}

testCase(mSum, "timer");

// благодаря функции "memorize" мы значительно ускоряем работу нашей программы(при текущей задержке программа работает быстрее практиески в 150 раз)

// результат работы таймера testCase(sum, 'timer'): timer: 250926.55493164062ms = 4 минуты
// без задержки: timer: 161.14404296875ms = 0.2 секунды

// результат работы таймера testCase(mSum, 'timer'): timer: 1686.26318359375ms = 1.7 секунд
// без задержки: timer: timer: 153.546875ms = 0.2 секунды
