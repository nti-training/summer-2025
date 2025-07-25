// function getData() {
//     let promise =  new Promise((resolve, reject) => {
//         let users = [];
//         if (users.length != 0) {
//             resolve('There are users in th system')
//         } else {
//             throw Error('No Data Found')
//         }
//     })
//      return promise;
// }

// getData().then(
//     resolve => console.log(resolve),
//     reject => console.log(reject)
// )

// ================================================

// function getData() {

//         let users = ['Abdallah'];
//         if (users.length > 0) {
//             return Promise.resolve('There are users in th system')
//         } else {
//             return Promise.reject(Error('No Data Found'))
//         }

// }

// getData().then(
//     resolve => console.log(resolve),
//     reject => console.log(reject)
// )


// ================================================


 async function getData() {
    const users = ['Abdallah'];
    if (users.length > 0) {
        return 'Users Found'
    } else {
        throw Error('No Users Found');
    }
}
let res = getData()
res.then(
    resolve => console.log(resolve),
    reject => console.log(reject)
)

console.log('start');

