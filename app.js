
const slider =document.querySelector('.boxes')
let isY = false
let startX;
// let scrollX;
let scrollLeft;

// mouse events 
slider.addEventListener('mousedown',(e)=>{
isY= true
slider.classList.add('active')
// console.log(e.pageX)
startX = e.pageX - slider.offsetLeft
// scrollX = slider.scrollX
scrollLeft = slider.scrollLeft
// console.log(startX)
})
slider.addEventListener('mouseleave',()=>{
isY = false
slider.classList.remove('active')
})
slider.addEventListener('mouseup',()=>{
isY = false
slider.classList.remove('active')
})
slider.addEventListener('mousemove',(e)=>{
    if(!isY)return;
    e.preventDefault()
    const x = e.pageX - slider.offsetLeft
    // console.log({x, startX})
    const walk = (x - startX)*3
    slider.scrollLeft = scrollLeft - walk
    // console.log(walk)
// console.log(startX)
// console.count(isY)
})