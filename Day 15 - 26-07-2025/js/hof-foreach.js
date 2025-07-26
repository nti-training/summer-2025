const allLinks = document.querySelectorAll('.btn');

const allTabs = document.querySelectorAll('.tab')

// localStorage.clear()

if (localStorage.getItem('currentTab')) {
    const selectedTab = document.querySelector(`[data-tab="${localStorage.getItem('currentTab')}"]`)
    const selectedLink = document.querySelector(`[data-link="${localStorage.getItem('currentTab')}"]`)

    removeActiveClassFromAllTabs(allTabs, 'tab-active')
    addActiveClassToTab(selectedTab, 'tab-active')

    removeActiveClassFromAllTabs(allLinks, 'active')
    addActiveClassToTab(selectedLink, 'active')

}

allLinks.forEach((element, index) => {
    element.onclick = function () {

        // remove active class from all links
        removeActiveClassFromAllTabs(allLinks)

        // add active class for the clicked Link
        addActiveClassToTab(element, 'active')

        removeActiveClassFromAllTabs(allTabs, 'tab-active')
        addActiveClassToTab(allTabs[index], 'tab-active')


        // localStorage.setItem('currentTab' , index)
        localStorage.setItem('currentTab', element.textContent)

    }
});

function removeActiveClassFromAllTabs(arr, cls = 'active') {
    arr.forEach(e => {
        e.classList.remove(cls)
    }
    )
}

function addActiveClassToTab(tab, cls='active') {
    tab.classList.add(cls)
}