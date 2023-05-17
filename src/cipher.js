const cipher = {
  encode: function (offset, string) {
    let encodedString = "";
    if ( offset === null || offset === 0 ) {
      throw new TypeError("Palabra Vacía")
    }
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      
      if (char.match(/[a-z]/i)) {
        const code = string.charCodeAt(i);
        if (code >= 65 && code <= 90) {
          char = String.fromCharCode(((code - 65 + offset) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code - 97 + offset) % 26) + 97);
        }
      }
      encodedString += char;
    } return encodedString;
  },


  decode: function (offset, string) {
    let decodedString = "";
    if (offset === null || offset === 0) {
      throw new TypeError("Palabra Vacía")
    }
    for (let i = 0; i < string.length; i++) {
      let char = string[i];

      if (char.match(/[a-z]/i)) {
        const code = string.charCodeAt(i);
        if (code >= 65 && code<= 90) {
          char = String.fromCharCode(((code + 65 - offset + 26) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          char = String.fromCharCode(((code + 97 - offset + 26) % 26) +97);
        }
      }
      decodedString += char;
    }
    return decodedString;
  }
};



export default cipher;
