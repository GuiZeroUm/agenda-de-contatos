const form = document.querySelector ('#form-contatos');
const atividades = [];
const notas = [];

let linhas = '';

form.addEventListener ('submit', function(e) {
    e.preventDefault();

    adicionaLinha ();
    atualizaTabela();

})

function adicionaLinha () {
    const inputNome = document.querySelector ('#form-nome');
    const inputNumero = document.querySelector ('#form-numero');

    if (atividades.includes(inputNome.value)) {
        alert (`O contato ${inputNome.value} já foi inserida.`)
    }
    else {
        atividades.push(inputNome.value);
        notas.push(parseFloat(inputNumero.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}`;
        linha += `<td>${inputNumero.value}`;
        linha += `</tr>`;
    
        linhas += linha;

    }

    inputNome.value = ''
    inputNumero.value = ''
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};