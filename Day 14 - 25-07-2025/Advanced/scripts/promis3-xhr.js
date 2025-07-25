
 function getData(apiLink) {
    return new Promise((resolve, reject) => {
        let myRequest = new XMLHttpRequest();
        myRequest.open('GET', apiLink);
        myRequest.setRequestHeader("X-RapidAPI-Key", "bd6dc99ef7msh3d7b16661fb6f30p1df6c9jsn78aa7473a913");
        myRequest.setRequestHeader("X-RapidAPI-Host", "sportscore1.p.rapidapi.com");
        myRequest.send()
        myRequest.onload = function () {
            if (this.readyState == 4 && this.status == 200) {
                resolve(JSON.parse(this.responseText))
            } else {
                reject(Error('No Data Found'))
            }
        }
        
    } )
}

result = getData('https://sportscore1.p.rapidapi.com/sports/1/teams?page=1')



async function readData (){
    console.log('before read');
    const container = document.createElement("div");
    container.classList.add("container");
    await result
      .then((result) => {
        //  for appliying more this only
        console.log(result.data);
        return result.data;
      })
      .then((resObject) => {
        for (const club of resObject) {
          const name = document.createElement("h2");
          const logo = document.createElement("img");
          name.textContent = club.name;
          logo.setAttribute("src", club.logo);
          const clubDiv = document.createElement("div");
          clubDiv.classList.add("club");
          clubDiv.append(name, logo);
          container.append(clubDiv);
          // console.log(club.name);
          // console.log(club.logo);
        }
        document.body.append(container);
      });

    console.log('after');

}

readData()