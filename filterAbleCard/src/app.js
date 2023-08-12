const $=document;
const buttons=$.querySelectorAll('button')
const card=$.querySelectorAll('.card');
const cards=$.querySelector('.cards');
// console.log(buttons,card,cards);
let target;
buttons.forEach(btn=>btn.addEventListener('click',(e)=>{
    $.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    console.log(e.target.textContent);
    card.forEach(el=>el.classList.add('hidden'))
    card.forEach(el => {
        console.log(el.dataset.name);
        if(el.dataset.name==e.target.textContent || e.target.textContent=='All'){
            el.classList.remove('hidden')
        }
    })
}));
// card.forEach(crd=>crd.insertAdjacentHTML('beforeend',`<button class="bg-blue-700 text-white absolute right-2 bottom-0 rounded-full p-2">Add To Basket</button>`))