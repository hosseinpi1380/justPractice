const $=document;
const hamburger=$.querySelector('.hamburger');
const closeSVG=$.querySelector('.closeIcon')
const openSVG=$.querySelector('.openIcon')
hamburger.addEventListener('click',()=>{
    openSVG.classList.toggle('hidden')
    closeSVG.classList.toggle('hidden')
    if(openSVG.classList.contains('hidden')){
        $.querySelector('.menu').classList.remove('hidden')
    }
    else{
        $.querySelector('.menu').classList.add('hidden')
    }
})
