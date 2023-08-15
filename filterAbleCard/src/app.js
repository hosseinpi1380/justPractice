const $=document;
const buttons=$.querySelectorAll('button')
const card=$.querySelectorAll('.card');
const cards=$.querySelector('.cards');

let target;
buttons.forEach(btn=>btn.addEventListener('click',(e)=>{
    $.querySelector('.active').classList.remove('active');
    e.target.classList.add('active');
    
    card.forEach(el=>el.classList.add('hidden'))
    card.forEach(el => {
        
        if(el.dataset.name==e.target.textContent || e.target.textContent=='All'){
            el.classList.remove('hidden')
        }
    })
}));
function modal() {
    Swal.fire({
        template: '#my-template'
    })
}
document.querySelectorAll('.card__info').forEach(crd=>crd.insertAdjacentHTML('beforeend',`<button class="bg-blue-700 text-white absolute right-2 bottom-0 rounded-full p-2">Add To Basket</button>`))
