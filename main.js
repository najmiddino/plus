let plus = document.querySelector('.plus')
let minus = document.querySelector('.minus')
let cosn = document.querySelector('.cosn')
let box = document.querySelector('.box')
plus.addEventListener( 'click' , () => {
    cosn.innerHTML++
})



minus.addEventListener( 'click' , ()=> {
    cosn.innerHTML--
})