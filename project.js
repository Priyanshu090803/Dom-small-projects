let Friendreq=document.querySelector('.add')
let status=document.querySelector('#status')
var Removereq=document.querySelector('#remove')


Friendreq.addEventListener('click',function(){
    status.innerText='Known'
    status.style.color="green"
    
})

Removereq.addEventListener('click',function(){
    status.innerText='Unknown'
    status.style.color='red'
})