let promise = new Promise((resolve, reject) => {

    let state = true
    if (state) {
        resolve("promise fulfilled")
    } else {
        reject("promise falied")
    }

})

// console.log(promise);

promise.then(
    (res) => console.log(`OK: ${res}`),
    (rej) => console.log(`Bad: ${rej}`)

)


// function test(){
//     return new promise()
// }

// test().then()


async function test() {
    let status = true;



    if (status) {
        console.log(await promise);
        return "Ok"
    } else {
        return "Error"
    }
}

let res = test();

console.log("dmfhsjdhfg");


// console.log(await promise);

