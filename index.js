//1
// function number(massiv) {
//     let numLength = massiv.length;
//     if (numLength < 3) {
//         return [];
//     }
    
//     let midle = Math.floor(numLength / 2);
//     return massiv.slice(midle - 1, midle + 2);
// }
// console.log(number([1, 2, 3, 4, 5]));

// 3
// const num1 = [1,2,3,4,5,6,7];
// const num2 = [23,46,29,12];
// const arr3 = num1.concat(num2)
// console.log(arr3)

// 4
// function indexOf(array, value) {
//     let index = array.indexOf(value);
//     if (index !== -1) {
//         return Math.pow(index, 7);
//     } else {
//         return false;
//     }
// }
// console.log(indexOf([1, 2, 7, 4], 7));

//5
// let num = [1,2,3,4,5,6,7];
// function lastIndexOfFind(arr, value){
//     return arr.lastIndexOf(value)
// }
// console.log(lastIndexOfFind(num))

// 6
// function isElementInBothArrays(array1, array2, element) {
//     return array1.indexOf(element) !== -1 && array2.indexOf(element) !== -1;
// }
// console.log(isElementInBothArrays([1, 2, 3], [3, 4, 5], 3));  // true
// console.log(isElementInBothArrays([1, 2, 3], [4, 5, 6], 3));  // false

// 7
// let num = [1,2,3,4,5];
// function isElementFind(arr, value){
//     return arr.includes(value)
// }
// console.log(isElementFind(num))

// 8
// function numThree(arr){
//     let sum = 0;
//     let count = 0;
//     arr.forEach(num =>{
//         if(num >= 100 && num < 1000 && num %2 !== 0 ){
//             sum += num;
//             count++;
//         }
//     })
//     return count > 0? sum/count : 0;
// }
// console.log(numThree([123, 456, 789, 101, 102, 103]))

// 9
// function transformArray(arr) {
//     return arr.map(number => {
//         if (number % 2 === 0) {
//             return Math.pow(number, 2);
//         } else {
//             return Math.pow(number, 3);
//         }
//     });
// }
// console.log(transformArray([1, 2, 3, 4, 5, 7, 8]));

// 10
// function getLastCharacters(string) {
//     return string.map(str => str[str.length - 1]);
// }
// console.log(getLastCharacters(['apple', 'banana', 'cherry']));

// 11
// function filterShortStrings(string) {
//     return string.filter(str => str.length < 4);
// }
// console.log(filterShortStrings(['apple', 'cat', 'banana', 'dog', 'fish']));

// 12
// let user = [
//     {name:'John', age:5},
//     {name:'Doe', age:20},
//     {name:'Alex', age:50}
// ]
// function bigAge(obj){
//     return obj.some(obj =>obj.age > 18)
// }
// console.log(bigAge(user))

// 13
// let names = ['Zafarjon', 'Ibrohimjon', 'Murodjon', 'Bekzodbek'];
// function endWithJon(names) {
//     return names.every(name => name.endsWith("jon"));
// }
// console.log(endWithJon(names))

// 14
// function findThreeDigitMultipleOfFive(array) {
//     return array.find(number => number >= 100 && number < 1000 && number % 5 === 0);
// }
// console.log(findThreeDigitMultipleOfFive([50, 150, 200, 305, 450]));

// 15
// function findIndexWithBek(names) {
//     return names.findIndex(name => name.includes('bek'));
// }
// console.log(findIndexWithBek(['Zafarjon', 'Boburbek']));   

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