

const myRequest = new XMLHttpRequest();

myRequest.open('GET', 'data/data.json')
myRequest.send();
console.log(myRequest);
myRequest.addEventListener('readystatechange', () => {
    console.log(myRequest.readyState);
    
    if (myRequest.readyState == 4 && myRequest.status == 200) {

        // console.log(myRequest.responseText);

        const myData = JSON.parse(myRequest.responseText)
        console.log(myData);
        // console.log(myData.data);

        for (const user of myData.data) {
            const name = document.createElement('h1');
            const id = document.createElement('h3');
            const address = document.createElement('p');
            const phone = document.createElement('p');
            const likes = document.createElement('p');
            const container = document.createElement('div');
            container.classList.add('cont')

            name.textContent = `Name :  ${user.name}`;
            id.textContent = `ID : ${user.product_id}`;
            address.textContent = `Desc => ${user.description}`;
            phone.textContent = `Price: ${user.price}`;
            likes.textContent = `Rating : ${user.rating}`;

            container.append(name, id, address, phone, likes)
            document.body.append(container)
        }
    }

    console.log(myRequest.readyState);
})

