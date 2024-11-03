const form = document.getElementById('form-atividade')
const imgAprovado = '<img src=" ./images/aprovado.png" alt="Emoji celebrando" />'
const imgReprovado = '<img src=" ./images/reprovado.png" alt="Emoji Triste" />'
const atividades = []
const notas = []

let linhas = ''

form.addEventListener('submit', function (e) {
    e.preventDefault()

    adicionaLinha()
    atualizaTabela()
    atualizaMediaFinal()
})

function adicionaLinha() {
    let inputNomeAtividade = document.getElementById('nome-atividade')
    let inputNotaAtividade = document.getElementById('nota-atividade')

    atividades.push(inputNomeAtividade.value)
    notas.push(parseFloat(inputNotaAtividade.value))

    let linha = "<tr>"
    linha += `<td>${inputNomeAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value}</td>`
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`
    linha += "</tr>"

    linhas += linha

    inputNomeAtividade = ''
    inputNotaAtividade = ''
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhas
}

function atualizaMediaFinal() {
    let mediaFinal = calculaMediaFinal()
}

function calculaMediaFinal() {
    let somaDasNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
    }

    return somaDasNotas / notas.length

}