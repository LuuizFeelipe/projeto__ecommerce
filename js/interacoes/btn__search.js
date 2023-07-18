const formBusca = document.getElementById('form__busca');
const campoBusca = document.getElementById('campo__busca');
const buttonBusca = document.getElementById('header__busca__btn');

const ativarFormBusca = ()=>{
    formBusca.classList.toggle('active');
    formBusca.classList.toggle('abrirBusca');
    setTimeout(()=>{
    formBusca.classList.toggle('disable');
    }, 200);
    formBusca.classList.toggle('fecharBusca');
    campoBusca.focus();

}
buttonBusca.addEventListener('click', ativarFormBusca);

export{ativarFormBusca};