## Treinamento Digital Innovation One - Exercicio - Conjunto Bons ou Ruins

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS -  Solução de problemas com JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

Nesse algoritmo você deverá descobrir se um conjunto de palavras é bom ou ruim. Por definição, um conjunto é bom quando nenhuma palavra desse conjunto é um prefixo de outra palavra. Caso contrário, é considerado um conjunto ruim.

Por exemplo, {dbc, dae, dbcde} é um conjunto ruim, pois dbc é um prefixo de dbcde. Quando duas palavras são idênticas, definimos como uma sendo prefixo da outra.


#### Entrada:

A entrada contém vários casos de teste. A primeira linha de cada caso de teste terá um inteiro N (1 ≤ N ≤ 10⁵), que representa a quantidade de palavras no conjunto. Segue então N linhas, cada uma tendo uma palavra de no máximo 100 letras minúsculas. A entrada termina quando N = 0 e não deve ser processada.

#### Saída:

Para cada caso de teste, você deverá imprimir "Conjunto Bom", ou "Conjunto Ruim", conforme explicado acima.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
3 | Conjunto Ruim
abc | Conjunto Bom
dae |
abcde |
2 |
abc |
def |
0 |


```javascript
//SOLUCAO 1
/*Entrada de dados sera pelo gets()*/
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
    /* pop() - Limpa o array, para ser reutilizado no proximo conjunto de palavras*/
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
```
