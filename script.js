const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"

function btnEncripitar() {
    const textoEncripitado = encripitar(textArea.value);
    mensagem.value = textoEncripitado;
    textArea.value = "";
}

function encripitar(stringEncripitada) {
    
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "obter"] , ["u" , "ufat"]]
    stringEncripitada = stringEncripitada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i ++ ) {
        if(stringEncripitada.includes(matrizCodigo [i][0])) {
            stringEncripitada = stringEncripitada.replaceAll([i][0], matrizCodigo[i][1]);

        }
   }
   
   return stringEncripitada

}
   function btnDesencripitar() {
    const textoDesencripitado = desencripitar(textArea.value);
    mensagem.value = textoDesencripitado;
    textArea.value = "";
}

function desencripitar(stringDesencripitada) {
    
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "obter"] , ["u" , "ufat"]]
    stringEncripitada = stringEncripitada.toLowerCase();

    for( let i = 0; i < matrizCodigo.length; i ++ ) {
        if(stringDesencripitada.includes(matrizCodigo [i][1])) {
            stringDesencripitada = stringDesencripitada.replaceAll([i][1], matrizCodigo[i][0]);

        }
   }
   return stringDesencripitada

}