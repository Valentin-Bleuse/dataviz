document.addEventListener("DOMContentLoaded", function () {
    // fetch('api.php').then(function(response) { 
    //     response.json().then(function(data){ 
    //     //    console.log(data);
    //        var produitsrecent = data;
    //        console.log(produitsrecent);
    //     }) 
    //  })

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
            console.log('2')
            position++
            document.querySelector('.js-graphs').style.left = -100 * position + '%'
            console.log("position  = ", -100 * position)
            blackdots()
        }
    }

    function decaledroite() {
        console.log('droite')
        if (position == 1) {
            position = 5
            document.querySelector('.js-graphs').style.left = -100 * position + '%'
            document.querySelector('.js-graphs').style.transition = 'none'
            setTimeout(function () {
                decaledroite()
            }, 20)
            blackdots()

        }
        else {
            document.querySelector('.js-graphs').style.transition = 'left 0.3s ease-out'
            console.log('2')
            position--
            document.querySelector('.js-graphs').style.left = -100 * position + '%'
            console.log("position  = ", -100 * position)
            blackdots()
        }

    }


    document.querySelector('.gauche').addEventListener("click", decaleGauche);
    document.querySelector('.droit').addEventListener("click", decaledroite);

    function dots1() {
        // var test=something(this.id);
        console.log(this.id)
        position = parseInt(this.id)
        document.querySelector('.js-graphs').style.left = -100 * position + '%'
        blackdots()

    }

    function blackdots() {
        document.getElementById('1').innerHTML = "⚪"
        document.getElementById('2').innerHTML = "⚪"
        document.getElementById('3').innerHTML = "⚪"
        document.getElementById('4').innerHTML = "⚪"
        document.getElementById(position).innerHTML = "🔵"

    }

    function dots() {
        document.querySelectorAll('.dot').forEach(function (e) {
            e.addEventListener("click", dots1)
        })
    };
    document.getElementById('1').innerHTML = "🔵"
    dots()

    //  

});