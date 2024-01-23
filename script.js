function mudancaDePagina() {
    const lista = document.querySelectorAll('li');
    const submit = document.querySelector('a[href^="#"]');
    const secao1 = document.querySelector('.inicio')
    const secao2 = document.querySelector('.result');
    const valor = document.querySelector('.valor');

    let itemSelecionado = false;
    if (lista.length) {
        function selecionarItem(index) {
            lista.forEach((item) => {
                item.classList.remove('ativo');
            })
            lista[index].classList.add('ativo');
            itemSelecionado = true;
            valor.innerHTML = ` ${index + 1}`
        }

        lista.forEach((item, index) => {
            item.addEventListener('click', () => {
                selecionarItem(index)
            })
        })
    }

    function passarProximaPagina() {
        if (itemSelecionado) {
            secao1.classList.add('ativo');
            secao2.classList.add('ativo');
        } else {
            window.alert('Selecione um dos itens abaixo');
        }
    }
    submit.addEventListener('click', passarProximaPagina);
}
mudancaDePagina();


