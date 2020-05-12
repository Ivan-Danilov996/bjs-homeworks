"use strict";

class Weapon {
  constructor(obj) {
    (this.name = obj.name),
      (this.attack = obj.attack),
      (this.durability = obj.durability),
      (this.range = obj.range),
      (this.originalDurability = obj.durability);
  }

  takeDamage(damage) {
    this.durability -= damage;
    if (this.durability < 0) {
      return (this.durability = 0);
    }
    return this.durability;
  }

  getDamage() {
    if (this.durability === 0) {
      return (this.attack = 0);
    }

    if ((this.durability * 100) / this.originalDurability >= 30) {
      return this.attack;
    }

    return this.attack / 2;
  }

  isBroken() {
    if (this.durability > 0) {
      return false;
    }
    return true;
  }
}

class Bow extends Weapon {
  constructor() {
    super(name);
    (this.name = "Лук"),
      (this.attack = 10),
      (this.durability = 200),
      (this.range = 3),
      (this.originalDurability = 200);
  }
}
class Sword extends Weapon {
  constructor() {
    super(name);
    (this.name = "Меч"),
      (this.attack = 25),
      (this.durability = 500),
      (this.range = 1),
      (this.originalDurability = 500);
  }
}

class Arm extends Weapon {
  constructor() {
    super(name);
    (this.name = "Рука"),
      (this.attack = 1),
      (this.durability = Infinity),
      (this.range = 1),
      (this.originalDurability = Infinity);
  }
}

class Knife extends Weapon {
  constructor() {
    super(name);
    (this.name = "Нож"),
      (this.attack = 5),
      (this.durability = 300),
      (this.range = 1),
      (this.originalDurability = 300);
  }
}

class Staff extends Weapon {
  constructor() {
    super(name);
    (this.name = "Посох"),
      (this.attack = 8),
      (this.durability = 300),
      (this.range = 2),
      (this.originalDurability = 300);
  }
}

class LongBow extends Bow {
  constructor() {
    super(name);
    (this.name = "Длинный лук"), (this.attack = 15), (this.range = 4);
  }
}

class Axe extends Sword {
  constructor() {
    super(name);
    (this.name = "Секира"), (this.attack = 27), (this.durability = 800);
  }
}

class StormStaff extends Staff {
  constructor() {
    super(name);
    (this.name = "Посох Бури"), (this.attack = 10), (this.range = 3);
  }
}

const longBow = new LongBow();
console.log(longBow);
const bow = new Bow();
console.log(bow);
const arm = new Arm();
console.log(arm);
const knife = new Knife();
console.log(knife);
const staff = new Staff();
console.log(staff);
const axe = new Axe();
console.log(axe);
const stormStaff = new StormStaff();
console.log(stormStaff);
const sword = new Sword();
console.log(sword);

console.log(sword.name);
console.log(sword.attack);
console.log(sword.durability);
console.log(sword.range);

sword.takeDamage(700);

console.log("после нанесения урона", sword.durability);

console.log("атака", sword.getDamage());

console.log("сломано", sword.isBroken());

//////////////////////////////////////////////

class StudentLog {
  constructor(name) {
    (this.name = name), (this.data = {});
  }

  getName() {
    return this.name;
  }

  getData() {
    return this.data;
  }

  addGrade(grade, subject) {
    if (grade > 0 && grade < 6) {
      if (subject in this.data) {
        this.data[subject].push(grade);
      } else {
        this.data[subject] = [];
        this.data[subject].push(grade);
      }

      return this.data[subject].length;
    } else {
      if (!(subject in this.data)) {
        this.data[subject] = [];
      }

      console.log(
        `Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`
      );
      return this.data[subject].length;
    }
  }

  getAverageBySubject(subject) {
    if (!(subject in this.data)) {
      return 0;
    }

    let averageBySubject = 0;

    for (let mark of this.data[subject]) {
      averageBySubject += mark;
    }
    if (averageBySubject === 0) {
      return 0;
    }
    return (averageBySubject /= this.data[subject].length);
  }

  getTotalAverage() {
    let totalAverage = 0;
    let counter = 0;

    for (let key in this.data) {
      let average = 0;
      for (let elem of this.data[key]) {
        average += elem;
        counter++;
      }
      totalAverage += average;
    }
    if (totalAverage === 0) {
      return totalAverage;
    }
    totalAverage /= counter;

    return totalAverage;
  }
}

const log = new StudentLog("Олег Никифоров");
console.log(log.getName());

console.log(log.getData());

log.addGrade(2, "algebra");
log.addGrade(4, "algebra");
log.addGrade(5, "geometry");
log.addGrade(4, "geometry");

console.log(log.addGrade(3, "algebra"));
console.log(log.addGrade("отлично!", "math"));

console.log(log.getAverageBySubject("geometry")); // 4.5
console.log(log.getAverageBySubject("algebra")); // 3
console.log(log.getAverageBySubject("math")); // 0

console.log(log.getTotalAverage());
