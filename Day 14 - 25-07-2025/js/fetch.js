fetch('https://fakestoreapi.com/products')
    .then(res => {
        data = res.json()
        console.log(data);
        return data

    }).then(x => {
       for (i of x){
        console.log(i.title);
        
       }
    })