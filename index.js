
let result = '';
let operation = '';
let operationNewNum = '';

const numBtnClicked = (e) => {
    if(operation == ''){
        result += e.target.dataset.number;   // arithmatic sign before value
        display(result);
    }else if(operation == '+'){
        operationNewNum += e.target.dataset.number;    // arithmatic sign after value and + sign used for append
        var displayText = document.getElementById('display').innerText;
        document.getElementById('display').innerText = displayText + e.target.dataset.number;
    }else if(operation == '-'){
        operationNewNum += e.target.dataset.number;
        var displayText = document.getElementById('display').innerText;
        document.getElementById('display').innerText = displayText + e.target.dataset.number;
    }else if(operation == '*'){
        operationNewNum += e.target.dataset.number;
        var displayText = document.getElementById('display').innerText;
       
        document.getElementById('display').innerText = displayText + e.target.dataset.number;
    }else if(operation == '/'){
        operationNewNum += e.target.dataset.number;
        var displayText = document.getElementById('display').innerText;
        document.getElementById('display').innerText = displayText + e.target.dataset.number;
    }else if(operation == '%'){
        operationNewNum += e.target.dataset.number;
        var displayText = document.getElementById('display').innerText;
        document.getElementById('display').innerText = displayText + e.target.dataset.number;
    }
    
    
}

const addBtnClicked = () => {
    operation = '+';
    document.getElementById('display').innerText = result + "+";
    
}

const minusBtnClicked = () => {
    operation = '-';
    document.getElementById('display').innerText = result + "-";
    
}

const multiplyBtnClicked = () => {
    operation = '*';
    document.getElementById('display').innerText = result + "*";
    
}

const divisionBtnClicked = () => {
    operation = '/';
    document.getElementById('display').innerText = result + "/";
    
}

const remainderBtnClicked = () => {
    operation = '%';
    document.getElementById('display').innerText = result + "%";
    
}

const equalBtnClicked = () => {
    if(operation == '+'){
        result = Number(result) + Number(operationNewNum); 
    }else if(operation == '-'){
        result = Number(result) - Number(operationNewNum); 
    }else if(operation == '*'){
        result = Number(result) * Number(operationNewNum); 
    }else if(operation == '/'){
        result = Number(result) / Number(operationNewNum); 
    }else if(operation == '%'){
        result = Number(result) % Number(operationNewNum); 
    }
    operation = ''; 
    operationNewNum = '';
    display(result);
}

const display = (value) =>{
    document.getElementById("display").innerHTML = value;
}

const allClearBtnClicked = () =>{
    operation = ''; 
    operationNewNum = '';
    result = '';
    document.getElementById("display").innerHTML = 0;
}

let numberBtn = document.querySelectorAll(".number");
numberBtn.forEach( singleNumBtn =>{
    singleNumBtn.addEventListener('click', numBtnClicked);
});


//Attaching event listeners

var addBtn = document.getElementById("addBtn");
addBtn.addEventListener('click', addBtnClicked);

var minusBtn = document.getElementById("minusBtn");
minusBtn.addEventListener('click', minusBtnClicked);

var multiplyBtn = document.getElementById("multiplyBtn");
multiplyBtn.addEventListener('click', multiplyBtnClicked);

var divisionBtn = document.getElementById("divisionBtn");
divisionBtn.addEventListener('click', divisionBtnClicked);

var remainderBtn = document.getElementById("remainderBtn");
remainderBtn.addEventListener('click', remainderBtnClicked);

var equalBtn = document.getElementById("equalBtn");
equalBtn.addEventListener('click', equalBtnClicked);

var allClearBtn = document.getElementById("allClear");
allClearBtn.addEventListener('click', allClearBtnClicked);
