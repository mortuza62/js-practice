// Target: Display every elements of an array

// let numbers=[ 25, 30,35, 40, 45, 50, 55,60, 65, 70]

// for (let i= 0; i< 5; i++){
//     const number= numbers[i];
//     console.log(number)
// }

// for (let i= 0; i< 20; i++){
//     if (i> 6){
//         break;
//     }
//     console.log(i);
// }


// let items= ['Pen', 'Book', 'Box', 'Paper', 'Glass']

// for (let i= 0; i< items.length; i++){
//     const item= items[i];
//     console.log(item);
// }

let items= ['Pen', 'Book', 'Box', 'Paper', 'Glass']

for (let i= 0; i< items.length; i++){
    const item= items[i];
    if (i> 3){
        break;
    }
    // console.log(item);
}

// let items= ['Pen', 'Book', 'Box', 'Paper', 'Glass']

for (let i= 0; i< 3; i++){
    const item= items[i];
    // console.log(item);
}

const num=[ 10, 25, 20, 25, 30, 35, 40, 45, 50,55];
const num2=num.slice(1, 5);
// console.log(num2);


const name='My name is KHAN'
// console.log(name.includes('khan'));