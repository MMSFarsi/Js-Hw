let on=document.querySelector('.on')
let of=document.querySelector('.of')
let img=document.querySelector('.img')

on.addEventListener('click', function(){
    img.src="https://www.w3schools.com/js/pic_bulbon.gif"
})
of.addEventListener('click', function(){
    img.src="https://www.w3schools.com/js/pic_bulboff.gif"
})
