const openNavMobal = document.getElementById('Open')
const headerMobal =  document.querySelector('.showOpen');
const closeBtn = document.getElementById('closeButton');

openNavMobal.addEventListener('click', function () {
    headerMobal.classList.add('active');
    console.log('abriu');
});
closeBtn.addEventListener('click', function () {
    headerMobal.classList.remove('active');
    console.log('fechou');
});


let btn = document.getElementById('btnTop')

btn.addEventListener("click", function(){
    window.scrollTo(0, 0)
})

function ocultar() {
  if (window.scrollY < 10) {
      btn.style.visibility = "hidden";
      btn.style.opacity = "0";
  } else {
      btn.style.visibility = "visible";
      btn.style.opacity = "1";
  }
}

window.addEventListener("scroll", ocultar)