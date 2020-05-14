"use strict";

function parseCount(value) {
  const result = Number.parseInt(value);

  if (isNaN(result)) {
    const error = new Error("Невалидное значение");
    throw error;
  }

  return result;
}

function validateCount(value) {
  try {
    const result = parseCount(value);
    return result;
  } catch (e) {
    return e;
  }
}

//2

class Triangle {
  constructor(a, b, c) {
    (this.a = a), (this.b = b), (this.c = c);

    if (
      this.a + this.b < this.c ||
      this.b + this.c < this.a ||
      this.a + this.c < this.b
    ) {
      const triangleError = new Error(
        "Треугольник с такими сторонами не существует"
      );
      throw triangleError;
    }
  }

  getPerimeter() {
    return this.a + this.b + this.c;
  }

  getArea() {
    const p = this.getPerimeter() / 2;
    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(
      3
    );
  }
}

function getTriangle(a, b, c) {
  try {
    const triangle = new Triangle(a, b, c);
    return triangle;
  } catch {
    const triangle = {
      getPerimeter() {
        return "Ошибка! Неправильный треугольник";
      },

      getArea() {
        return "Ошибка! Неправильный треугольник";
      },
    };

    return triangle;
  }
}
