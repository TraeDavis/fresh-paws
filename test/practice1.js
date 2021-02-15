// atributes
var links = document.getElementsByTagName('a');
console.log(links);

links[0].setAttribute('target', 'blank');
links[0].setAttribute('class', 'bordered');

// create html elements
var h1 = document.createElement('h1');
// create text
var text = document.createTextNode("Hello World");
// add text to element
h1.appendChild(text);
console.log(h1);

var main = document.getElementById('main');
main.appendChild(h1);

// hide an element
// main.style.display = "none";

// remove an element
// main.remove();

// Challenge --- create an ul with three li
// and append it to the main
var ul = document.createElement('ul');
var newLi = document.createElement('li');
var text1 = document.createTextNode("item 1");
newLi.appendChild(text1);
ul.appendChild(newLi);

var newLi2 = document.createElement('li');
var text2 = document.createTextNode("item 2");
newLi2.appendChild(text2);
ul.appendChild(newLi2);

var newLi3 = document.createElement('li');
var text3 = document.createTextNode("item 3");
newLi3.appendChild(text3);
ul.appendChild(newLi3);

main.appendChild(ul);

// better solution

var ol = document.createElement('ol');
for(var i=1; i<=3; i++){
    var item = document.createElement('li');
    var liText = document.createTextNode('Element ' + i);
    item.appendChild(liText);
    ol.appendChild(item);
}

main.appendChild(ol);