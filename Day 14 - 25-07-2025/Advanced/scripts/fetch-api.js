// fetch('https://sportscore1.p.rapidapi.com/sports/1/teams?page=1').then(result => {
//     console.log(reult);
// })

const url = 'https://sportscore1.p.rapidapi.com/sports/1/teams?page=1';

fetch(url, {
    method: 'GET',
    headers: {
        "X-RapidAPI-Key": "bd6dc99ef7msh3d7b16661fb6f30p1df6c9jsn78aa7473a913",
        "X-RapidAPI-Host": "sportscore1.p.rapidapi.com"
    }
}).then((result) => {
    let myData = result.json()
    return myData;
}).then(resObject => {
    console.log(resObject.data);
  
    for (const club of resObject.data) {

        const name = document.createElement('h2');
        const logo = document.createElement('img');
        name.textContent = club.name;
        logo.setAttribute('src', club.logo);
        const clubDiv = document.createElement('div');
        clubDiv.classList.add('club');
        clubDiv.append(name, logo);
        container.append(clubDiv)
        // console.log(club.name);
        // console.log(club.logo);
    }
    document.body.append(container)
})

const container = document.createElement('div')
container.classList.add('container');