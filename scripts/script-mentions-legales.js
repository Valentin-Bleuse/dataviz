let etat = 0
let slider = document.querySelector('.js-slider');
let mentions = document.querySelector('.legal-container')
function open_mentions() {
    if (etat == 0) {
        slider.style.display = 'none'
        mentions.style.display = 'flex'
        etat = 1
    }
    else {
        slider.style.display = 'block'
        mentions.style.display = 'none'
        etat = 0

    }
}

function close_mentions() {
    slider.style.display = 'block'
    mentions.style.display = 'none'
    etat = 0
}