// function weEat(money){
//     console.log('Please give us food', money);
// }

// const taka= 100;
// weEat(taka);



// function samuchaKhabo(money, money2){
//     console.log('Please give us Samucha', money, money2);
// }

// const first= 30;
// const second= 40;
// samuchaKhabo (first, second);

// ****Assignment****

// 1. Problem: 1 radianToDegree

// function radianToDegree(radian) {
//     if (typeof radian !== 'number') {
//     return 'Please input a number'
//     }
//     else {
//     const pi = Math.PI;
//     const convertToDegree = radian * (180 / pi);
//     let float = convertToDegree.toFixed(2);
//     let result = parseFloat(float)
//     return result;
//     }
//     }
//     const degree = radianToDegree(10);
//     console.log(degree);

    // 2. Problem:2 isJavaScriptFile

    // function isJavaScriptFile(string) {
    //     if (typeof string !== "string") {
    //     return 'Please enter a string value'
    //     }
    //     else {
    //     if (string.endsWith('.js') === true) {
    //     return true;
    //     }
    //     else {
    //     return false;
    //     }
    //     }
    //     }
    //     const inputValue = 'app.png';
    //     const inputData = isJavaScriptFile(inputValue)
    //     console.log(inputData);


    // 3. Problem 3: oilPrice

// function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
// if (typeof (dieselQuantity) !== 'number' || typeof (petrolQuantity) !== 'number' || typeof (octaneQuantity) !== 'number') {
// return 'Please enter a number in the parameter'
// }
// const perLitreDieselPrice = 114;
// const perLitrePetrolPrice = 130;
// const perLitreOctanePrice = 135;
// const dieselCost = dieselQuantity * perLitreDieselPrice;
// const petrolCost = petrolQuantity * perLitrePetrolPrice;
// const octaneCost = octaneQuantity * perLitreOctanePrice;
// const totalCost = dieselCost + petrolCost + octaneCost;
// return totalCost;
// }
// const orderedQuantity = oilPrice(0, 2, 3);
// console.log(orderedQuantity);


// 4. Problem 4: publicBusFare


// function publicBusFare(peopleNumber) {
// if (typeof peopleNumber !== 'number') {
// return 'Please enter a valid number'
// }
// else {
// const busCapacity = 50;
// const microCapacity = 11;
// const publicBusPerPersonCost = 250;
// const busNeeded = peopleNumber % busCapacity;
// const remainder = busNeeded % microCapacity;
// const publicBusTotalFare = remainder * publicBusPerPersonCost;
// return publicBusTotalFare;
// }
// }
// const picnicMember = publicBusFare(55);
// console.log(picnicMember);


// 5 Problem 5: getBestFriend


// function isBestFriend(friendInfo) {
// // error handle
// if (typeof (friend1) === "number" || typeof (friend2) === "number" || Array.isArray(friend1) || Array.isArray(friend2) || typeof (friend1) === "string" || typeof (friend2) === "string") {
// return "Please enter a valid object using property : value"
// }
// else {
// for (var i = 0; i < friendInfo.length; i++) {
// if (friend1.name === friend2.friend && friend2.name === friend1.friend) {
// return true
// }
// else {
// return false
// }
// }
// return friendInfo
// }
// };
// const friend1 = { name: 'Tinni', friend: 'Maisha' };
// const friend2 = { name: 'Maisha', friend: 'Tinni' };
// const friendInfo = [friend1, friend2];
// const realFriend = isBestFriend(friendInfo);
// console.log(realFriend);


