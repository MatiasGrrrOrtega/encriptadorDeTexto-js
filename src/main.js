let encriptarBtn = document.querySelector("#input-encriptar");
let desencriptarBtn = document.querySelector("#input-desencriptar");
let valorText = document.querySelector("#textarea");
let resultado = document.querySelector("#textarea-resutado");
let ocultarDiv1 = document.querySelector("#ocultar");
let ocultarDiv2 = document.querySelector("#ocultar2");
let ocultarDiv3 = document.querySelector("#ocultar3");
let mostrarDiv1 = document.querySelector("#mostrar1");
let mostrarDiv2 = document.querySelector("#mostrar2");
let inputCopiar = document.querySelector("#input-copiar");
const array = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

function comprobar_textoEncriptado(){
    if (valorText.value != "") {
        encriptar(valorText.value);
    }else{
        alert("PORFAVOR INGRESE TEXTO SIN NUMEROs Y SIN CARACTERES ESPECIALES");
    }
}

function comprobar_textoDesencriptado(){
    if (valorText.value != "") {
        desencriptar();
    }else{
        alert("PORFAVOR INGRESE TEXTO SIN NUMEROs Y SIN CARACTERES ESPECIALES");
    }
}

function encriptar(valor) {
    for (let i = 0; i < array.length; i++) {
        if (valor.includes(array[i][0])) {
            valor = valor.replaceAll(array[i][0], array[i][1]);
        }
    }
    mostrarResutado(valor);
}

function desencriptar() {
    let text = valorText.value;
    for (let i = 0; i < array.length; i++) {
        if (text.includes(array[i][0])) {
            text = text.replaceAll(array[i][1], array[i][0]);
        }
    }
    mostrarResutado(text);
}

function mostrarResutado(text) {
    resultado.innerHTML = text;
    ocultarDiv1.style.display = "none";
    ocultarDiv2.style.display = "none";
    ocultarDiv3.style.display = "none";
    mostrarDiv1.style.display = "block";
    mostrarDiv2.style.display = "block";
}

function copiar_texto() {
    navigator.clipboard.writeText(resultado.innerHTML).then(() => {
        console.log("Copiado")
    }).catch(err => {
        console.log('Error', err);
    })
}

encriptarBtn.onclick = comprobar_textoEncriptado;
desencriptarBtn.onclick = comprobar_textoDesencriptado;
inputCopiar.onclick = copiar_texto;
