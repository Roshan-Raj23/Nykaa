// const footerElement = document.getElementsByClassName('footerInclude')
// const footerElement = document.querySelector('.footerInclude')
const footerElement = document.querySelector('footer')


fetch('/pages/footer.html')
.then(res => res.text())
.then(data =>{
    footerElement.innerHTML = data;
})