
let botonEncriptar = document.querySelector('.btn-encrypt');
let botonDesencriptar = document.querySelector('.btn-decrypt');
let botonCopiar = document.querySelector('.btn-copy');
let doll = document.querySelector('.container-doll');
let h3 = document.querySelector('.container-h3');
let text = document.querySelector('.container-text');
let result = document.querySelector('.text-result');
let botonPegar = document.querySelector('.btn-pegar');
let botonLimpiar1 = document.querySelector('.btn-clean1');
let botonLimpiar2 = document.querySelector('.btn-clean2');


botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;
botonPegar.onclick = pegar;
botonLimpiar1.onclick = limpiar1;
botonLimpiar2.onclick = limpiar2;

function encriptar(){
    ocultarImg();
    let area = recuperarText();
    result.textContent = encriptarTexto(area);

}

function desencriptar(){
    ocultarImg();
    let area = recuperarText();
    result.textContent = desencriptarTexto(area);
}

function copiar() {

    let textoACopiar = document.querySelector('.text-result');

    let texto = textoACopiar.textContent;
    let temporal = document.createElement("textarea");
    temporal.value = texto;
    document.body.appendChild(temporal);
    temporal.select();
    document.execCommand("copy");
    document.body.removeChild(temporal);

    alert('Texto copiado al portapapeles');
  }

  function pegar() {
    navigator.clipboard.readText().then(function(texto) {
      let area = document.querySelector('.textarea');
      area.value = texto;
    });
  }

function recuperarText(){
    let area = document.querySelector('.textarea');
    return area.value;
}

function limpiar1() {
    let area = document.querySelector('.textarea');
    area.value = '';
  }
  
  function limpiar2() {
    let resultado = document.querySelector('.text-result');
    resultado.textContent = '';
  }

function ocultarImg(){
    doll.classList.add('ocultar')
    h3.classList.add('ocultar');
    text.classList.add('ocultar');
}

function encriptarTexto(mensaje) {
    let texto = mensaje;
    let resultado= '';

    for(let i = 0; i< texto.length; i++){
        if(texto[i] == 'a'){
            resultado = resultado + 'ai'
        }
        else if(texto[i] == 'e'){
            resultado = resultado + 'enter'
        }
        else if(texto[i] == 'i'){
            resultado = resultado + 'imes'
        }
        else if(texto[i] == 'o'){
            resultado = resultado + 'ober'
        }
         else if(texto[i] == 'u'){
            resultado = resultado + 'ufat'
        }
        else{
            resultado = resultado + texto[i];
        }
    }

    return resultado;

}

function desencriptarTexto(mensaje) {
    let texto = mensaje;
    let resultado= '';

    for(let i = 0; i< texto.length; i++){
        if(texto[i] == 'a'){
            resultado = resultado + 'a'
            i = i+1;
        }
        else if(texto[i] == 'e'){
            resultado = resultado + 'e'
            i = i+4;
        }
        else if(texto[i] == 'i'){
            resultado = resultado + 'i'
            i = i+3;
        }
        else if(texto[i] == 'o'){
            resultado = resultado + 'o'
            i = i+3;
        }
         else if(texto[i] == 'u'){
            resultado = resultado + 'u'
            i = i+3;
        }
        else{
            resultado = resultado + texto[i];
        }
    }

    return resultado;

}