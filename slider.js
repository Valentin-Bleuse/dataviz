document.addEventListener("DOMContentLoaded", function () {
    var position = 1
    function decaleGauche() {
        console.log('gauche')
        if (position == 4) {
            position = 0
            document.querySelector('.js-graphs').style.left = -100 * position + '%'
            document.querySelector('.js-graphs').style.transition = 'none'

            setTimeout(function () {
                decaleGauche()
            }, 20)


        }
        else {
            document.querySelector('.js-graphs').style.transition = 'left 0.3s ease-out'
            document.querySelector('.js-graphs').style.transition = 'left 0.3s ease-out'
            console.log('2')
            position++
            document.querySelector('.js-graphs').style.left = -100 * position + '%'
        }
    }

    function decaledroite() {
        console.log('droite')
        if (position == 0) {
            position = 3
            document.querySelector('.js-graphs').style.left = -100 * position + '%'
            document.querySelector('.js-graphs').style.transition = 'none'
            setTimeout(function () {
                decaledroite()
            }, 20)

        }
        else {
            document.querySelector('.js-graphs').style.transition = 'left 0.3s ease-out'
            console.log('2')
            position--
            document.querySelector('.js-graphs').style.left = -100 * position + '%'
        }
    }
    document.querySelector('.gauche').addEventListener("click", decaleGauche);
    document.querySelector('.droit').addEventListener("click", decaledroite);

    function dots1() {
        // var test=something(this.id);
        console.log(this.id)
        position = parseInt(this.id)
        document.querySelector('.js-graphs').style.left = -100 * position + '%'
        document.getElementById('1').innerHTML = "⚪"
        document.getElementById('2').innerHTML = "⚪"
        document.getElementById('3').innerHTML = "⚪"
        document.getElementById(position).innerHTML = "⚫"

    }

    function dots() {
        document.querySelectorAll('.dot').forEach(function (e) {
            e.addEventListener("click", dots1)
        })
    };
    document.getElementById('1').innerHTML = "⚫"
    dots()

});