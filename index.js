// Your code here
function saturdayFun(activity="roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(sign="*") {
    return function doTheThing(str="special") {
        return `You are ${sign}${str}${sign}!`
    }
}

const Calculator = {
    add: function(a, b) {
        return (a + b);
    },
    subtract: function(a, b) {
        return (a - b);
    },
    multiply: function(a, b) {
        return (a * b);
    },
    divide: function(a, b) {
        return (a / b);
    }
}

function actionApplyer(integer, arr) {
    let a = integer

    for (let i = 0; i < arr.length; i++) {
        a = arr[i](a)
    }

    return a
}