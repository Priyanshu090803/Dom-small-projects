let upperdiv=document.querySelector('.upperdiv');
let red=document.querySelector('#red')
let blue=document.querySelector('#blue')
let green=document.querySelector('#green')
let yellow=document.querySelector('#yellow')
let button=document.querySelector('button')


red.addEventListener('click',function(){
    upperdiv.style.backgroundColor='red'
})

blue.addEventListener('click',function(){
    upperdiv.style.backgroundColor='blue'
})

green.addEventListener('click',function(){
    upperdiv.style.backgroundColor='green'
})

yellow.addEventListener('click',function(){
    upperdiv.style.backgroundColor='yellow'
})

