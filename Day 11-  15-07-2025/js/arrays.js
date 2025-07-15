let names = ["ali", "ahmed" , "aya"]
let salries = [40000,60000,80000]

let mix = ["ali" , 256, true, [10,20,"A"], names ]

console.log(names.length);
console.log(mix.length);

console.log(names[0]);

// shift, unshift, pop, push
// indexOf, lastIndexOf, splice , slice 

let res = salries.concat(names)
console.log(res);

// copy
let arr1 = [1,2,3, 1]
let arr2 = arr1
console.log(arr1);
console.log(arr2);

arr1.push(4)
console.log(arr1);
console.log(arr2);

let arr3 = arr1.slice()
console.log(arr3);
arr3.push(6)
console.log(arr3);
console.log(arr1);

let arr4 = [...arr1] // destrcture

console.log(arr1.includes(1));






