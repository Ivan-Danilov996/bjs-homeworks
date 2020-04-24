"use strict";


function getResult(a,b,c){
    // код для задачи №1 писать здесь
    // return x;
    let discr = Math.pow(b, 2) - 4 * a * c;
    let x =[];
    debugger;

    if (discr < 0) {
        return x;
    }

    if (discr === 0) {
        x.push(-b / 2 * a);
        return x;
    } 
    
    if (discr > 0){
        x.push((-b + Math.pow(discr, 1/2)) / 2 * a);
        x.push((-b - Math.pow(discr, 1/2)) / 2 * a);
        return x;
    }
}

function getAverageMark(marks){
    // код для задачи №2 писать здесь
    // return averageMark;
    let averageMark = 0;
    let x = marks.length;

    if (marks.length === 0) {
        return averageMark;
    }

    else {
        if (marks.length > 5) {
        console.log('Оценок больлше 5');
        marks.splice(5);
        }
        for(let i = 0; i < marks.length; i++) {
            averageMark += marks[i];
        }
        return averageMark / marks.length;
    }
}

function askDrink(name,dateOfBirthday){
    // код для задачи №3 писать здесь
    // return result;

    let dateToday = new Date().getFullYear();
    let dateOfBirthdayFullYear = dateOfBirthday.getFullYear();
    let age  = dateToday - dateOfBirthdayFullYear ;
    if (age < 18) {
        let result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
        return result;
    }
    else {
        let result = `Не желаете ли олд-фэшн, ${name}?`;
        return result;
    }
}