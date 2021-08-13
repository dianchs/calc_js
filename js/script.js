function Plus(){
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let result = document.querySelector('.result')

    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let res = num1 + num2
    result.innerHTML = res
}

function Minus(){
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let result = document.querySelector('.result')

    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let res = num1 - num2
    result.innerHTML = res
}

function Times(){
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let result = document.querySelector('.result')

    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let res = num1 * num2
    result.innerHTML = res
}

function Dell(){
    let num1 = document.querySelector('.num1').value;
    let num2 = document.querySelector('.num2').value;
    let result = document.querySelector('.result')

    num1 = parseInt(num1)
    num2 = parseInt(num2)
    let res = num1 / num2
    result.innerHTML = res
}

function Clear(){
    let num1 = document.querySelector('.num1');
    let num2 = document.querySelector('.num2');
    let result = document.querySelector('.result');
    num1.value = ' '
    num2.value = ' '
    result.innerHTML = ' '
}