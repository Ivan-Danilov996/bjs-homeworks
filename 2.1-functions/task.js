'use strict';
//1
function getSolutions(a, b, c) {
    let D = Math.pow(b, 2) - 4 * a * c;
    let x1;
    let x2;

    if(D < 0) {
        return {
            D,
            roots: []
        }
    } 


    if(D === 0) {
        x1 = -b / (2 * a);
        return {
            D,
            roots: [x1]
        }
    }


    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);

    return {
        D,
        roots: [x1, x2]
    }
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions( a, b, c );

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);

    if (result.D < 0) {
        console.log('Уравнение не имеет вещественных корней')
    }

    if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}`)
    }

    if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    }
}

//2
//имеет аргумент data, в котором хранятся данные об оценках
function getAverageScore(data) {
    
    let value = 0;
    let length = 0;

    getAverageMark(data);
    
    for (let key in data) {
        value += data[key];
        length++;
    }
    
    data.average = value /= length;

    return data;
}


//вычисляет среднее значение массива
function getAverageMark(marks) {

    for (let key in marks) {
        let arr = marks[key];
        let value = 0;
        for (let elem of arr) {
            value += elem;
        }
        value /= arr.length
        marks[key] = value;
    }

    return marks
}

console.log(getAverageScore({
    algebra: [2, 4, 5, 2, 3, 4],
    geometry: [2, 4, 5],
    russian: [3, 3, 4, 5],
    physics: [5, 5],
    music: [2, 2, 6],
    english: [4, 4, 3],
    poetry: [5, 3, 4],
    chemistry: [2],
    french: [4, 4]
}))

//3

function getPersonData(secretData) {
    
    let data = new Object();
    data.firstName = getdecodedValue(secretData['aaa']);
    data.lastName = getdecodedValue(secretData['bbb']);

    return data;
}

function getdecodedValue(secret) {

    if (secret === 0) {
        return 'Родриго'
    }
    return 'Эмильо'

}


console.log( getPersonData({
    aaa: 0,
    bbb: 0
}))

console.log( getPersonData({
    aaa: 1,
    bbb: 0
}))

console.log( getPersonData({
    aaa: 0,
    bbb: 1
}))

console.log( getPersonData({
    aaa: 1,
    bbb: 1
}))