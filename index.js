// 1
// function number(massiv) {
//     let numLength = massiv.length;
//     if (numLength < 3) {
//         return [];
//     }
    
//     let midle = Math.floor(numLength / 2);
//     return massiv.slice(midle - 1, midle + 2);
// }
// console.log(number([1, 2, 3, 4]));

// 2
// let arrays = [
//     ['Zafarbek', 'Ahad', 'Jasur'],
//     [4, 5, 6],
//     ['olcha', 'gilos', 'olma']
// ];
// function swap(arrays) {
//     let temp = arrays[0];
//     arrays[0] = arrays[2];
//     arrays[2] = temp;
// }
// swap(arrays);
// arrays.forEach(arr => {
//     console.log(arr);
// });

// 3
// let numbers = [1,2,3,4,5,6,7,8];
// function lastIndexOf(arr, value) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === value) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(lastIndexOf(numbers, 5));
// console.log(lastIndexOf(numbers, 6));

// 4
// let arr1 = [1,2,3,4,5,6,7];
// let arr2 = [8,9,4,10,3,1];
// let value = 1;
// function find(arr1, arr2, value){
//     let foundArr1 = arr1.includes(value);
//     let foundArr2 = arr2.includes(value);
//     return foundArr1 && foundArr2;
// }
// console.log(find(arr1,arr2, value))

// 5
// let fruits = ['gilos', 'olma', 'olcha'];
// function includesElement(arr, value) {
//     return arr.includes(value);
// }
// console.log(includesElement(fruits, 'olma'));
// console.log(includesElement(fruits, 6));

//6
// let num = [123,782,333,657,823];
// function numThree(arr){
//     let sum = 0;
//     let count = 0;
//     arr.forEach(num =>{
//         if(num >= 100 && num <= 999){
//             sum += num;
//             count++;
//         }
//     })
//     if(count === 0){
//         return 0;
//     }
//     return sum / count;
// }
// console.log(numThree(num));

// 7
// let numbers = [1, 2, 3, 4, 5];
// let transformed = transformArray(numbers);
// function transformArray(arr) {
//     return arr.map(num => {
//         if (num % 2 === 0) {
//             return num ** 2;
//         } else {
//             return num ** 3;
//         }
//     });
// }
// console.log(transformed);

// 8
// let fruits = ['gilos', 'o`rik', 'shaftoli', 'olma', 'olcha'];
// let lastLetter = getLastLetters(fruits);
// function getLastLetters(arr){
//     return arr.map(str => str.slice(-1))
// }
// console.log(lastLetter)

// 9
// let words = ['hard', 'pig', 'eat', 'dog'];
// let lastLetter = getLastLetters(words);
// function getLastLetters(arr){
//     return arr.filter(str => str.length < 4);
// }
// console.log(lastLetter)

// 10
// let user = [
//     {name:'Jhon', age:5},
//     {name:'Doe', age:30},
//     {name:'Alex', age:50},
// ]
// function userAbout(arr){
//     return arr.some(person => person.age > 18)
// }
// console.log(userAbout(user))

// 11
// let names = ['Zafarjon', 'Ibrohimjon', 'Murodjon', 'Bekzodjon'];
// function endWithJon(names) {
//     return names.every(name => name.endsWith("jon"));
// }
// console.log(endWithJon(names))

// 12
// let numbers = [12, 75, 151, 400, 215, 678, 985];
// function uchHonaliSonlar(arr) {
//     return arr.find(num => num >= 100 && num <= 999 && num % 5 === 0);
// }
// console.log(uchHonaliSonlar(numbers));

// 13
// let names = ['Zafarbek', 'Jasurbek', 'Aziz'];
// function findBek(names){
//     return names.findIndex(name => name.includes('bek'));
// }
// console.log(findBek(names))

// OBJECT METHODIGA OID MASALALAR
// 1
// let objKey = {
//     name: "Zafarbek",
//     age: 17,
//     ocuption: "Student"
// }
// function objKeys(obj){
//     return Object.keys(obj)
// };
// let keys = objKeys(objKey)
// console.log(objKey)

// 2
// let objValue = {
//     name: "Zafarbek",
//     age: 17,
//     ocuption: "Student"
// }
// function objValues(obj){
//     return Object.values(obj)
// };
// let value = objValues(objValue)
// console.log(objValue)

// 4
// let objValue = {
//     name: "Zafarbek",
//     age: 17,
//     ocuption: "Student"
// }
// function freezeObj(obj){
//     Object.freeze(obj);
//     return obj;
// }
// let frozenObj = freezeObj(objValue);
// frozenObj.age = 17;
// frozenObj.newProp = "new";
// console.log(frozenObj)