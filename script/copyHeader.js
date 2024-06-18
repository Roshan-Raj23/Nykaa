// const headerElement = document.getElementsByClassName('headerInclude')
// const headerElement = document.querySelector('.headerInclude')
const headerElement = document.querySelector('header')

fetch('/pages/header.html')
.then(res => res.text())
.then(data =>{
    headerElement.innerHTML = data;
    // const parser = new DOMParser();
    // const doc = parser.parseFromString(data , 'text/html');
    // eval(doc.querySelector('script').textContent)
})


/** Another way to copy html css from another file to an element  **/
// console.log(`div id: ${'headerInclude'}, filename: ${'pages/header.html'}`);

// let xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     headerElement.innerHTML = this.responseText;
// }

// xhttp.open("GET" , `pages/header.html` , true);
// xhttp.send();