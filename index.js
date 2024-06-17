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

