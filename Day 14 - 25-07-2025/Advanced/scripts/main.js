fetch('https://fakestoreapi.com/products')
            .then(res=>{
                console.log(res);
                return res.json()})
            .then(json=>console.log(json))


window.console.log("welcome")
setTimeout(()=> {
    console.log("Hello");

}, 3000)
let time1 = setTimeout(() => {
    console.log("welcome");
}, 1000);

clearTimeout()

console.log('end');