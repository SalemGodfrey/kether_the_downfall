let c1 = document.querySelectorAll(".c1 div")
c1.forEach(e =>{
    e.addEventListener('click', function (){
        e.classList.toggle('black')
    } )
})

