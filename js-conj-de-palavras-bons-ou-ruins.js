//SOLUCAO 1
quantNum = gets();
getsString = [];

do {
    if (quantNum === 0 || quantNum < 1 || quantNum > Math.pow(10, 5)) break;
    for (i = 0; i < quantNum; i++) getsString = [...getsString, gets()];
    console.log(verificarConjuntoString(getsString) ? 'Conjunto Ruim' : 'Conjunto Bom');
    while (getsString.length) getsString.pop();
} while (quantNum = gets());


function verificarConjuntoString(arrString) {
    return verificarString = arrString.some((strAtual, index, arrString) => {
        for (const str of arrString)
            if (new RegExp(`^(${strAtual}).+`).test(str)) return true;
        return (arrString.reduce((total, w) => total += w === strAtual ? 1 : 0, 0)) > 1;
    });
}