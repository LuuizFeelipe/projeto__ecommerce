// CLICK BOTÃO TOPO
const botaoTop = document.getElementById('btn__top');

const activeButtonScroll = ()=>{
    const scrollY = window.scrollY;
    if (scrollY > 600){
        botaoTop.classList.add('active');
        botaoTop.classList.remove('disable');
        botaoTop.classList.add('opacidade1');
        botaoTop.classList.remove('opacidade0');

    } else{
        setTimeout(()=>{
        botaoTop.classList.add('disable');
        },400);
        setTimeout(()=>{
        botaoTop.classList.remove('active');
        },400);
        botaoTop.classList.add('opacidade0');
        botaoTop.classList.remove('opacidade1');

    }
}
const scrollTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}


window.addEventListener('scroll', activeButtonScroll);
botaoTop.addEventListener('click', scrollTop)

 export{scrollTop, activeButtonScroll};