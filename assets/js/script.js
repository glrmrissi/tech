const openNavMobal = document.getElementById('Open')
const headerMobal =  document.querySelector('.showOpen');
const closeBtn = document.getElementById('closeButton');
let width = document.body.offsetWidth
console.log(width)

openNavMobal.addEventListener('click', function () {
    headerMobal.classList.add('active');
    console.log('abriu');
});
closeBtn.addEventListener('click', function () {
    headerMobal.classList.remove('active');
    console.log('fechou');
});