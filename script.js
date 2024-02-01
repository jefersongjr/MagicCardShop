const navButton = document.querySelector('.navMenu');
const navContainer = document.querySelector('.navList');


navButton.addEventListener('click', () => {
    if (navContainer.style.display === 'flex') {
         navContainer.style.display= 'none'
        } else { 
            navContainer.style.display= 'flex'
    };
})

const adjustMenuOnResize = () =>{
    if (window.innerWidth >= 768) {
        navContainer.style.display = 'flex';
    } else {
        navContainer.style.display = '';
    }
}

window.addEventListener('resize', adjustMenuOnResize);
