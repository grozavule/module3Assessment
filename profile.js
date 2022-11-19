let favoriteColorBtn = document.querySelector('#color');
let favoritePlaceBtn = document.querySelector('#place');
let favoriteRitualBtn = document.querySelector('#ritual');

favoriteColorBtn.addEventListener('click', () => {
    alert(`My favorite color is red.`);
});

favoritePlaceBtn.addEventListener('click', () => {
    alert(`My favorite place is my home.`);
});

favoriteRitualBtn.addEventListener('click', () => {
    alert(`My favorite 'ritual' is watching NFL football on Thanksgiving.`);
});