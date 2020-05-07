"use sttrict";

function getAnimalSound(animal) {
  if (animal === undefined) {
    return null;
  }

  const sound = animal.sound;

  return (animalSound = sound);
}

function getAverageMark(marks) {
  let average = 0;

  if (marks.length === 0) {
    return 0;
  }

  for (let element of marks) {
    average += +element;
  }

  average /= marks.length;

  const roundedAverage = Math.round(average);

  return (averageMark = roundedAverage);
}

function checkBirthday(birthday) {
  const now = Date.now();

  const date = new Date(birthday);

  birthday = +date;

  const diff = now - birthday;

  // в году 8760 часов + 24 каждые 4 года = 8766
  const age = diff / 1000 / 3600 / 8766;

  verdict = age > 18 ? true : false;

  return verdict;
}
