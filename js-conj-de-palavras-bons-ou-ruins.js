//SOLUCAO 1
const imprimirResultado = (resultado) => console.log(resultado ? 'Conjunto Ruim' : 'Conjunto Bom');

const verificarConjuntoString = (arrString) => {
  return verificarString = arrString.some((strAtual, index, arrString) => {
      for (let str of arrString) if (new RegExp(`^(${strAtual}).+`).test(str)) return true;
      return (arrString.reduce((total, w) => total += w === strAtual ? 1 : 0, 0)) > 1;
  });
}

(function entradaDeDados(numCasoTeste){
  let arrTexto = [];
  do {
    if (numCasoTeste === 0 || numCasoTeste < 1 || numCasoTeste > Math.pow(10, 5)) break;
    for (let i = 0; i < numCasoTeste; i++) arrTexto = [...arrTexto, gets()];
    let resultado = verificarConjuntoString(arrTexto);
    imprimirResultado(resultado);
    while(arrTexto.length) arrTexto.pop();
  }while (numCasoTeste = gets());
})(gets());



//SOLUCAO 2
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