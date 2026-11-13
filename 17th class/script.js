
var hamburger = document.querySelector('.hamburger')
var cross = document.querySelector('.cross')
var navList = document.querySelector('.nav-list')

function mobileButtonClick() {
    
    navList.classList.toggle('show');

    if(navList.classList.contains('show')) {
       hamburger.style.display = 'none';
       cross.style.display = 'block';
    }
    else {
 hamburger.style.display = 'block';
       cross.style.display = 'none';
    }

}