const allLinks = document.querySelectorAll('.btn');

const allTabs = document.querySelectorAll('.tab')

allLinks.forEach((element , index) => {
    element.onclick = function(){

        allLinks.forEach(ele => {
            ele.classList.remove('active')
        })
        element.classList.add('active')

        allTabs.forEach(e => {
            e.classList.remove('tab-active')
        })

        allTabs[index].classList.add('tab-active')

    }
});
