'use strict'


function parseCount(value) {

    value = Number.parseInt(value);

    if (isNaN(value)) {
        const parseError = new Error("Невалидное значение");
        throw parseError;
    }

    return value

}


function validateCount(value) {

    try {
        if(isNaN(parseCount(value))) {
            const validateError = new Error("Невалидное значение");
            throw validateError;
        }
        return parseCount(value)

    } catch(e) {
        return ("Невалидное значение");
    }
}

//2




class Triangle {
    
    constructor(a, b, c) {
        this.a = a,
        this.b = b,
        this.c = c

        

    }

    getPerimeter() {
        try {
            if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {
                const triangleError = new Error("Треугольник с такими сторонами не существует");
                throw triangleError;
            }
            this.P = this.a + this.b + this.c
            return this.P
        }
        catch(e) {
            return ("Ошибка! Неправильный треугольник")
        }
        
    }

    getArea() {
        try {
            if (this.a + this.b < this.c || this.b + this.c < this.a || this.a + this.c < this.b) {
                const triangleError = new Error("Треугольник с такими сторонами не существует");
                throw triangleError;
            }
            const p = (this.a + this.b + this.c) / 2
            return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
        }
        catch(e) {
            return ("Ошибка! Неправильный треугольник")
        }
        
    }
    
}

function getTriangle(a, b, c) {

    const triangle = new Triangle(a, b, c)

    return triangle

}
