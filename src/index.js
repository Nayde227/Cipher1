


const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



function cifrar() {

  const clave = document.getElementById('clave');
  const rango = document.getElementById('rango');
  const claveEncriptada = document.getElementById('encriptado');
  const palabra = clave.value.toUpperCase();
  let palabraCifrada = "";
  for (let i = 0; i < palabra.length; i++) {
    const charSinCodificar = palabra[i];
    const indexChar = alfabeto.indexOf(charSinCodificar);

    if (indexChar === -1) {
      palabraCifrada += charSinCodificar;
    } else {
      const indexCharCifrado = (indexChar + parseInt(rango.value)) % alfabeto.length;
      palabraCifrada += alfabeto[indexCharCifrado];
    }
  }

  claveEncriptada.value = palabraCifrada;
}


function descifrar() {
 
  const clave = document.getElementById('clave');
  const rango = document.getElementById('rango');
  const claveDesencriptada = document.getElementById('encriptado');
  const palabra = clave.value.toUpperCase();
  let palabraDescifrada = "";
  
  for (let i = 0; i < palabra.length; i++) {
    const charCodificado = palabra[i];
    const indexChar = alfabeto.indexOf(charCodificado);

    if (indexChar === -1) {
      palabraDescifrada += charCodificado;
    } else {
      const indexCharDescifrado = (indexChar - parseInt(rango.value) + alfabeto.length) % alfabeto.length;
      palabraDescifrada += alfabeto[indexCharDescifrado];
    }
  }

  claveDesencriptada.value = palabraDescifrada;
}
