let req = new XMLHttpRequest();
// req.open('GET', './Advanced/data/data.json')
req.open('GET', 'https://fakestoreapi.com/users')
req.send()

console.log(req);


req.addEventListener('readystatechange', function(){

    if (req.readyState == 4 && req.status == 200){
        // console.log(req.responseText);
        // JSON to JS 
        const res = JSON.parse(req.responseText)
        console.log(res);
        for (prod of res){
            console.log(prod.username);
            const h1Elemnt = document.createElement('h1')
            h1Elemnt.innerText = prod.username;
            document.body.appendChild(h1Elemnt)
            
        }
        
        
    }

    
})

