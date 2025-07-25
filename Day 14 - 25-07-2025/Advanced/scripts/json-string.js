let myJson = `{"id":1 , "name":"ali"}`

// convert json to js object
let jsObject = JSON.parse(myJson)

console.log(myJson);
console.log(jsObject);

jsObject.id = 5;
console.log(jsObject);

// convert js object to json
let jsonResult = JSON.stringify(jsObject)

console.log(jsonResult);

// 
// synchronous
console.log(1);
console.log(2);
// alert(3)
console.log(4);

// Async
console.log(11);
console.log(22);
setTimeout(() => {
   console.log(33);
}, 5000);
console.log(44);
console.log(44);
console.log(44);
console.log(44);


setTimeout(() => {
    console.log(x);
}, 2000);
let x = 90;
console.log(x+8000);



