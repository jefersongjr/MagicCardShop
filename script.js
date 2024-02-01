const navButton = document.querySelector('.navMenu');
const navContainer = document.querySelector('.navList');
const cardName = document.querySelector('.cardName');
const imgList = document.querySelector('.imgList');
const imgPreview = document.querySelector('.imgPreview');
const englishName = document.querySelector('.englishName');
const heartButton = document.querySelector(".heartButton");
const colorDetails = document.querySelector(".colorDetails");
const manaDetails = document.querySelector(".manaDetails");
const cardType = document.querySelector(".cardType");

let liked = false;

const cardSet = [
 {imageUrl: "img/card2.jpg", englishName: "Counterspell", name: "Contramágica_2", mana: 2, color: "Azul", manaImage: "img/blueMana.png", type: "Mágica Instantânea"},
 {imageUrl: "img/card4.jpg",englishName: "Coordinated Assault", name: "Assalto Coordenado", mana:1, color: "Vermelho",manaImage: "img/redMana.png", type: "Instantânea"},
 {imageUrl: "img/card1.jpg", englishName: "Counterspell", mana: 2, name: "Contramágica_1", color: "Azul", type: "Mágica Instantânea"},
 {imageUrl: "img/card3.jpg", englishName: "Counterspell", mana: 2, name: "Contramágica_3", color: "Azul", type: "Mágica Instantânea"},
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

const addManaImg = (number, url, color) => {
    manaDetails.innerHTML = "";
    for (i = 0; i < number; i++ ){
        manaDetails.innerHTML += `<li><img src="${url}" alt="${color}" class="miniMana"/></li>`;
    }
}

const initialSet = () => {
    cardName.innerHTML = cardSet[0].name.replace(/_[0-9]+$/, '');
    englishName.innerHTML = cardSet[0].englishName;
    addManaImg(cardSet[0].mana, cardSet[0].manaImage, cardSet[0].color)
    colorDetails.innerHTML = cardSet[0].color;
    colorDetails.innerHTML = cardSet[0].color;
    cardType.innerHTML = cardSet[0].type;
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
    addManaImg(cardObject.mana, cardObject.manaImage, cardObject.color);
    colorDetails.innerHTML = cardObject.color;
    if (cardObject.color === "Azul") {
      colorDetails.classList = "colorDetails blue";
    } else {
        colorDetails.className = "colorDetails red";
    }
    englishName.innerHTML = cardObject.englishName;
    cardType.innerHTML = cardObject.type;
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