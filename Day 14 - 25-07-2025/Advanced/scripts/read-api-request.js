const myRequest = new XMLHttpRequest();
// privaye api 
myRequest.open('GET', 'https://sportscore1.p.rapidapi.com/sports/1/teams?page=1');
myRequest.setRequestHeader("X-RapidAPI-Key", "bd6dc99ef7msh3d7b16661fb6f30p1df6c9jsn78aa7473a913");
myRequest.setRequestHeader("X-RapidAPI-Host", "sportscore1.p.rapidapi.com");
myRequest.send()


myRequest.addEventListener('readystatechange', function () {
    if (myRequest.readyState == 4 && myRequest.status == 200) {
        // console.log(myRequest.responseText);
        const resObject = JSON.parse(this.responseText)
        console.log(resObject.data);
        const container = document.createElement('div')
        container.classList.add('container');
        for (const club of resObject.data) {
            const name = document.createElement('h2');
            const logo = document.createElement('img');
            name.textContent = club.name;
            logo.setAttribute('src', club.logo);

            const clubDiv = document.createElement('div');
            clubDiv.classList.add('club');

            clubDiv.append(name,logo);
            container.append(clubDiv)

            clubDiv.addEventListener('click' , function(e){
            
                console.log(e.target.firstElementChild.textContent)
            })

            // console.log(club.name);
            // console.log(club.logo);

        }
        document.body.append(container)
    }
})


