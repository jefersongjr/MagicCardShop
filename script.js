const navButton = document.querySelector('.navMenu');
const navContainer = document.querySelector('.navList');
const cardName = document.querySelector('.cardName');
const imgList = document.querySelector('.imgList');
const imgPreview = document.querySelector('.imgPreview');
const englishName = document.querySelector('.englishName');
const heartButton =  document.querySelector(".heartButton")
let liked = false;

const cardSet = [
 {imageUrl: "img/card2.jpg", englishName: "Counterspell", name: "Contramágica_2", mana: 2, color: "blue"},
 {imageUrl: "img/card4.jpg",englishName: "Coordinated Assault", name: "Assalto Coordenado", mana:1, color: "red"},
 {imageUrl: "img/card1.jpg", englishName: "Counterspell", name: "Contramágica_1", color: "blue"},
 {imageUrl: "img/card3.jpg", englishName: "Counterspell", name: "Contramágica_3", color: "blue"},
];

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

const initialSet = () => {
    cardName.innerHTML = cardSet[0].name.replace(/_[0-9]+$/, '');
    englishName.innerHTML = cardSet[0].englishName;

}

const createListImg = (cardSet) => {
    imgList.innerHTML = '';

    cardSet.forEach(card => {
        imgList.innerHTML += `<li><img src="${card.imageUrl}" alt="${card.name}" class="miniCard"/></li>`;
    });
}

const clickImage = (event) => {
    const image = event.target;
    const miniCard = document.querySelectorAll('.miniCard');

    let coloredImage = null;
    miniCard.forEach(img => {
        if (img.style.filter === 'none') {
            coloredImage = img;
        }
    });

    if (coloredImage && coloredImage !== image) {
        coloredImage.style.filter = 'grayscale(100%)';
    }
    image.style.filter = 'none';
    const cardObject = cardSet.find((card) => card.name === image.alt);
    const editedTittle = cardObject.name.replace(/_[0-9]+$/, '');
    cardName.innerHTML = editedTittle;
    imgPreview.src = cardObject.imageUrl;
    console.log(favotiteCards);
    englishName.innerHTML = cardObject.englishName;
}

function toggleHeart() {
    liked = !liked;
    if (liked) {
        heartButton.innerHTML = "🧡";
    } else {
        heartButton.innerHTML = "♡";
    }
}

window.addEventListener('resize', adjustMenuOnResize);
imgList.addEventListener('click', clickImage);


adjustMenuOnResize();
initialSet();
createListImg(cardSet);