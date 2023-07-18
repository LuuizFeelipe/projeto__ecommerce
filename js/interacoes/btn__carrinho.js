// ABRIR E FECHAR ABA LATERAL
const abaLateral = document.getElementById('carrinho__aba-lateral');
const btnAbrirAba = document.getElementById('carrinho__icone__valor');
const btnFecharAba = document.getElementById('carrinho__closebtn');
    
const abrirAbaLateral = ()=>{
    abaLateral.classList.add('active');
    abaLateral.classList.add('abrirAba');
    abaLateral.classList.remove('fecharAba');
    abaLateral.classList.remove('disable');
}

const fecharAbaLateral = ()=>{
    setTimeout(()=> {
    abaLateral.classList.add('disable');
    }, 200);
    setTimeout(()=> {
    abaLateral.classList.remove('active');
    }, 200);
    abaLateral.classList.add('fecharAba');
    abaLateral.classList.remove('abrirAba');
}

btnAbrirAba.addEventListener('click', abrirAbaLateral);
btnFecharAba.addEventListener('click', fecharAbaLateral);

export{abrirAbaLateral, fecharAbaLateral};