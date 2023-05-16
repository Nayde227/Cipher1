import cipher from './cipher.js';

const btnEncode = document.getElementById('btn1');
const btnDecode = document.getElementById('btn2');
const inputMessage = document.getElementById('clave');
const rangeOffset = document.getElementById('rango');
const result = document.getElementById('encriptado')

btnEncode.addEventListener("click", (e) => {
  e.preventDefault();
  const string = inputMessage.value;
  const offset = parseInt(rangeOffset.value);
  const encodedMessage = cipher.encode(offset, string);
  
  result.value = encodedMessage;
});

btnDecode.addEventListener("click", (e) => {
  e.preventDefault();
  const string = inputMessage.value;
  const offset = parseInt(rangeOffset.value);
  const decodedMessage = cipher.decode(offset, string);

  result.value = decodedMessage;
});
