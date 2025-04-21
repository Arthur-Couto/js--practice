const sortNumber() => Math.floor(( Math.random() * 10) + 1;
let orderedList = [];
let list = [];
let quantity = parseInt(window.prompt('how many numbers in this list? (min: 2; max: 10)'));
let number;

if (isNaN(quantity) || quantity < 1 || quantity > 10) {
    console.log('Please enter a valid number between 1 and 10.');
    return;
}

for (let i = 0; i < quantity; i++) {
  number = sortNumber();
  list.push(number);
}

function orderList(quantity) {

}


