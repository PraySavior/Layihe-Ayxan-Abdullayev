let first = document.querySelector('.first') 
let second = document.querySelector('.second')
let third = document.querySelector('.third')
let fourth = document.querySelector('.fourth')
let fifth = document.querySelector('.fifth')
let bruh = document.querySelectorAll('.sections')
first.addEventListener('click',()=>{
    bruh.forEach(element => {
        if(element.classList.contains('sections')){
            element.style.display = 'inline-block'
        }
    }) 
})
second.addEventListener('click',()=>{
    bruh.forEach(element => {
        if(element.classList.contains('pack')){
            element.style.display = 'inline-block'
        }else{
            element.style.display = 'none'
        }
    })        
})
third.addEventListener('click',()=>{
    bruh.forEach(element => {
        if(element.classList.contains('mockup')){
            element.style.display = 'inline-block'
        }else{
            element.style.display = 'none'
        }
    })        
})
fourth.addEventListener('click',()=>{
    bruh.forEach(element => {
        if(element.classList.contains('typo')){
            element.style.display = 'inline-block'
        }else{
            element.style.display = 'none'
        }
    })        
})
fifth.addEventListener('click',()=>{
    bruh.forEach(element => {
        if(element.classList.contains('pho')){
            element.style.display = 'inline-block'
        }else{
            element.style.display = 'none'
        }
    })        
})
    
