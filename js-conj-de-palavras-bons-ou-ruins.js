//SOLUCAO 1
/*Entrada de dados será pelo gets()*/
quantNum = gets();
getsString = [];

do {
    /*if() Verifica a quantidade de palavras em cada conjunto. 
    /*Math.pow() verifca se a quantidade ultrapassa o limite de (10 elevado a 5)*/
    if (quantNum === 0 || quantNum < 1 || quantNum > Math.pow(10, 5)) break;
    /* for() - Entrada de dados será pelo gets(). Será Armazenado o conjunto 
    de palavras no array getsString[]*/
    for (i = 0; i < quantNum; i++) getsString = [...getsString, gets()];
    /*Chama a função e imprime o resultado*/
    console.log(verificarConjuntoString(getsString) ? 'Conjunto Ruim' : 'Conjunto Bom');
    /* pop() - Limpa o array*/
    while (getsString.length) getsString.pop();

} while (quantNum = gets());


function verificarConjuntoString(arrString) {
    /*some() verifica se ao menos um dos elementos no array passa no teste 
    implementado na função, o retorno será true ou false*/
    return verificarString = arrString.some((strAtual, index, arrString) => {
        /*test() verifica se tem trechos de strings iguais (uso de expressão regular + string)*/
        for (const str of arrString)
            if (new RegExp(`^(${strAtual}).+`).test(str)) return true;
            /*reduce() compara uma string com a outra*/
        return (arrString.reduce((total, w) => total += w === strAtual ? 1 : 0, 0)) > 1;
    });
}