const numberUlElements = document.querySelector(".categories");
const numberLiElements = document.querySelectorAll("li.item");

console.log('Number of categories: ', numberLiElements.length);

const h2Elements = document.querySelectorAll("h2");

h2Elements.forEach(function(h2Element, index) {

    console.log('Category: ', h2Element.textContent);

    const ulElements = h2Element.parentNode.querySelector("ul");
    const liElements = ulElements.querySelectorAll("li");
    
    console.log('Elements: ', liElements.length);
})


