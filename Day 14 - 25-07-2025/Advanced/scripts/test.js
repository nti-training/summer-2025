const daySelectc = document.getElementById('day-select')
const yearSelectc = document.getElementById('year-select')


for (let index = 1; index < 32; index++) {
    const item = document.createElement("option")
    item.value= index;
    item.textContent = index
    daySelectc.appendChild(item)
}

currYear = new Date().getFullYear();
for (let index = currYear; index > currYear-120; index--) {
    const item = document.createElement("option")
    item.value= index;
    item.textContent = index
    yearSelectc.appendChild(item)
    
}