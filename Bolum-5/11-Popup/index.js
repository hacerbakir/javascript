const button = document.querySelector('button');
const mainPopup = document.querySelector('.mainPopup');
const popupClose = document.querySelector('.popup-close');


button.addEventListener('click', () => {
    mainPopup.style.display = 'block';
})

popupClose.addEventListener('click', () => {
    mainPopup.style.display = 'none';
})
mainPopup.addEventListener('click', e => {
    if (e.target.className === 'mainPopup') {
        mainPopup.style.display = 'none';

    }
})


