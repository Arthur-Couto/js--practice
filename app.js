function calcularProbabilidadeAdocao() {
    let peso = document.getElementById('peso').value;
    let idade = document.getElementById('idade').value;

    let nota = 10;

    if (peso > 20) {
    nota = nota - 4;
} else if (peso > 10) {
    nota = nota - 2;
}

if (idade >= 14) {
    nota = nota - 4;
} else if (idade >= 8) {
    nota = nota - 2;
}

    return nota;
}
