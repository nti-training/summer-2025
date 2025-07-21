
// map (    function(element, index?,array?){ code}   )
let salaries = [100, 200, 300, 500]
let netSalaries = salaries.map(function (ele, ind, arr) {
    console.log(ele, ind, arr, this);

    return ele + ele * 0.2
}, this)
let netSalary = salaries.map(ele => ele * 1.2)

console.log(netSalaries);
console.log(netSalary);


let users = [
    { name: "Ahmed", skills: ["html", "css"] },
    { name: "Aya", skills: ["html", "css", "js"] },
    { name: "Aya", skills: ["html", "css", "js"] },
    { name: "Aya", skills: ["html", "css", "js"] },
    { name: "Aya", skills: ["html", "css", "js"] },
    { name: "Aya", skills: ["html", "css", "js"] },
    { name: "Aya", skills: ["html", "css", "js"] },
    { name: "Aya", skills: ["html", "css", "js"] },
]

let usersDivs = users.map(ele => {
    const div = document.createElement('div')
    div.innerHTML = `
        
            <h1>${ele.name}</h1>
            <p> ${ele.skills.join(" | ")} </p>
        
    `
    return div
})

const container = document.getElementById("container")
for (let item of usersDivs) {
    container.append(item)
    console.log(item);

}


// Filter (function (ele,ind,arr) {})

let filteredSalaries = salaries.filter(function (ele, ind, arr) {
    console.log(ele, ind, arr);
    return ele > 200
})

console.log(filteredSalaries);

let names = ["ahmed", "aya", "omar", "hamza", "ayat", "Amgad"]
function filterNames(letter) {
    return  names.filter (name => name.toLocaleLowerCase().startsWith(letter.toLocaleLowerCase()))
    
}

console.log(filterNames('a'));

// filter.map

let sal = [5000,6000,4000,4500,6200, 8000 , 2050]

let res = sal.map(ele => ele *1.3).filter(e => e>6000)
console.log(sal);
console.log(res);

// reduce(function(acc, curr, ind, arr) {} , init)
let sum = sal.reduce((prev,curr,ind,arr)=>{
    console.log(prev,curr,ind,arr);
    return curr + prev
    
}, 0)

let sum2 = sal.reduce((prev, curr) => prev + curr)
let maxNumber = sal.reduce((prev, curr)=>{
    if (prev> curr)
        return prev
    return curr
})
let maxNum = sal.reduce((prev, curr)=> prev > curr ? prev : curr)
console.log(maxNum);
console.log(maxNumber);

// [5000,6000,4000,4500,6200, 8000 , 2050]
/**
 * prev | curr | max
 * 5000 | 6000 | 8000
 * 6000 | 4000
 * 6000 | 4500
 * 6000 | 6200
 * 6200 | 8000
 * 8000 | 2050
 * 8000 |
 */
let arr =  ["s1","s2","s3"]
let joined  = arr.reduce((prev,curr) => `${prev} ${curr}`)
// s1 | s2 | s3

