const circle = document.getElementById('circle')
let state = false

const changePrice = () => {
    if(!state) {
        state = false
        console.log('price is monthly')
    } else {
        state = true
        console.log('price is annual')
    }
}

circle.addEventListener('click', changePrice);