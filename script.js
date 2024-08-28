const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

/* La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none"
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
}

function encriptar(stringEncriptada) {
    let matrixCodigo =[["e", "enter"], ["i", "imas"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrixCodigo.length; i++){
        if(stringEncriptada.includes(matrixCodigo[i][0], matrixCodigo[i],[1])){
            stringEncriptada = stringEncriptada.replaceAll(matrixCodigo[i][0], matrixCodigo[i][1])
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada) {
    let matrixCodigo =[["e", "enter"], ["i", "imas"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrixCodigo.length; i++){
        if(stringDesencriptada.includes(matrixCodigo[i][1], matrixCodigo[i],[1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrixCodigo[i][1], matrixCodigo[i][0])
        }
    }
    return stringDesencriptada
}