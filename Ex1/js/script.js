function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     console.log('Teste');
    // };

    function receberEvento(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        pessoas.push({
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        });

        console.log(pessoas);

        resultado.innerHTML = `<p>Nome: ${nome}, Sobrenome: ${sobrenome}, Peso: ${peso}, Altura: ${altura}</p>`;

        // const pessoa = {
        //     nome: nome,
        //     sobrenome: sobrenome,
        //     peso: peso,
        //     altura: altura
        // };

        // pessoas.push(pessoa);

        // exibirPessoas();

        // function exibirPessoas() {
        //     resultado.innerHTML = ''; // Limpa o conteúdo anterior
    
        //     pessoas.forEach(pessoa => {
        //         resultado.innerHTML += `<p>${pessoa.nome} ${pessoa.sobrenome} - Peso: ${pessoa.peso}, Altura: ${pessoa.altura}</p>`;
        //     });
        // }
    }

    form.addEventListener('submit', receberEvento);

}

escopo();