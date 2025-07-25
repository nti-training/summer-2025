const myPromis = new Promise((resolve, reject) => {
    setTimeout(() => {
        let check = true
        if (check) {
            
            resolve('Ok , Good Promise')
        } else {
            reject('Sorry , Bad Promise')
            // throw Error('Sorry , Bad Promise')
        }
    }, 3000);
})

// function readData() {
//     console.log('Before Promise');
//     myPromis.then(
//         resolve => console.log(resolve)
//     )
//     console.log('After Promise');
// }

async function readData() {
    console.log('Before Promise');
    let x = await  myPromis
    console.log(await myPromis);
    try {
        console.log(  myPromis);
    } catch (reason) {
        console.log(`Reason : ${reason}`);
    } finally {
        console.log(`Promise Finished`);
    }
    console.log('After Promise');
}

readData()