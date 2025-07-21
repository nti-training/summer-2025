console.log(document);
console.dir(document)

console.log(document.title);
document.title = "DOM | Page"

console.log(document.body);

console.log(document.images);
console.log(document.links);
console.log(document.forms);
console.log(document.forms[0]);
console.log(document.styleSheets);

// Select Element
const imagesSection = document.getElementById("images-section")
const allImages = document.getElementsByTagName('img')
const allNames = document.getElementsByName("ele")
const allCls = document.getElementsByClassName('cls')

// querySelector
const clsElement = document.querySelector('div > .cls') // first element
const clsElements = document.querySelectorAll('.cls') // all element


// 
const firstSection = document.querySelector('section')

// attributes
console.log(firstSection);
console.log(firstSection.attributes);
console.log(firstSection.id);
firstSection.id = 20
firstSection.title ="demo"
firstSection.setAttribute("custom", "Hello")
// firstSection.custom = "hllo"
console.log(firstSection.attributes);
console.log(firstSection.attributes.length);
console.log(firstSection.getAttribute("custom"));
console.log(firstSection.getAttribute("id"));
console.log(firstSection.hasAttributes());
firstSection.removeAttribute("title")

// Parent
console.log(firstSection.parentElement);


// child
console.log(firstSection.childElementCount);
console.log(firstSection.children);
console.log(firstSection.childNodes);
console.log(firstSection.firstChild);
console.log(firstSection.lastChild);
console.log(firstSection.firstElementChild);
console.log(firstSection.lastElementChild);

// Siblings
console.log(firstSection.nextSibling);
console.log(firstSection.nextElementSibling);
console.log(firstSection.previousSibling);
console.log(firstSection.previousElementSibling);

// 

const element = firstSection.firstElementChild;
element.onclick = function(e){
    e.preventDefault();
    element.parentElement.remove()
}

// before
firstSection.append()












