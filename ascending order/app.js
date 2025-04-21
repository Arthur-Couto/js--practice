let orderedList = [];
let list = [];
let quantity = parseInt(window.prompt('how many numbers in this list? (min: 2; max: 10)'));  //could use Number() to turn string into number
let number;

//checking if prompt is a valid input
if (isNaN(quantity) || quantity < 1 || quantity > 10) {
    console.log('Please enter a valid number between 2 and 10.');
    return;
} else {
    //aplication of loops
    for (let i = 0; i < quantity; i++) {
        number = sortNumber();
        while (list.includes(number)) {
            number = sortNumber();
        }
        list.push(number)
    }

    //[...list] makes a copy of the array list before ordering, keeping the original array unaltered 
    orderedList = [...list].sort((a, b) => a - b);
    console.log('Original list:', list);
    console.log('Ordered list:', orderedList);
}

//using arrow function
const sortNumber = () => Math.floor(Math.random() * 10 + 1);
