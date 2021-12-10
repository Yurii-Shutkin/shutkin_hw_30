const elems = document.getElementsByTagName('li');
const elemsArr = [];

for(let elem of elems) {
    console.log(elem);
    elemsArr.push(elem.textContent);
};

console.log(elems.length);
console.log(elemsArr);