// function add(a,b){
//     return a+b;
    
// }

// console.log(add(5,15));

// let a = 20;
// let b = "20"
// if(a>b){
//     console.log("yes a is = ")
// }

// let nums = [1,2,3,8,10]
// let res = nums [3]
// console.log(res)

//check for numbers divisible by three
let arr1 = [1,2,3,5,10,100,4,6,12];


// for (let k = 5; k < arr1.length ; k++) {
//     if(arr1[k]% 3 === 0){
//         console.log(arr1[k]);
//     }
// }

// arr1.push(1001);
// console.log(arr1);

// arr1.push("lihle");
// arr1.unshift("Ndindwa")
// console.log(arr1);

// let goat = arr1.splice(4,2);

//Ascending order
// let res = arr1.sort(
// //     (a,b)=>{
// //     return a - b;
// // }
// )

//Descending order
// let res = arr1.sort(
//     (a,b)=>{
//         return b - a;
//     }
// )
// console.log(goat);

//Literal object
let emp = {};

let person = {
    fname: "Lihle",
    lname: "Ndindwa",
    speak: ()=>{
        console.log(person.lname);
    }
}
person.mname = "dwight";

console.log(person.mname);
console.log(person);