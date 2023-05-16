const cipher = {
  encode: function (offset, string) {
    let encodedString = "";
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      const code = string.charCodeAt(i);
      if (code >= 32 && code <= 126) {
        char = String.fromCharCode(((code - 32 + offset) % 95) + 32);
      }
      encodedString += char;
    } return encodedString;
  },

  decode: function (offset, string) {
    let decodedString = "";
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      const code = string.charCodeAt(i);
      if (code >= 32 && code <= 126) {
        char = String.fromCharCode(((code - 32 - offset + 95) % 95) + 32);
      }
      decodedString += char;
    }
    return decodedString;
  }
};

export default cipher;
