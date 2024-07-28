const circle = document.getElementById('circle')
let state = false
let prices = document.getElementsByClassName('prices')

const changePrice = () => {
    if(state) {
        state = false
        prices[0].innerHTML = `<span>&dollar;</span>199.99`
        prices[1].innerHTML = `<span>&dollar;</span>249.99`
        prices[2].innerHTML = `<span>&dollar;</span>399.99`
    } else {
        state = true
        prices[0].innerHTML = `<span>&dollar;</span>19.99`
        prices[1].innerHTML = `<span>&dollar;</span>24.99`
        prices[2].innerHTML = `<span>&dollar;</span>39.99`
    }
}

circle.addEventListener('click', changePrice);