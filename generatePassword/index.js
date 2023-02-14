var sr = require('simple-random');
const DEFAULT_LENGTH = 8;
const DEFAULT_CUSTOM_CHAR = '';
const notPass = () => true;

export function generatePassword(options) {
    if(options?.length !== undefined && (typeof options?.length) !== 'number') {
      throw new Error("Invalid options");    
    }
    if (options?.characters !== undefined && options?.characters === '') {
      throw new Error("Invalid options");    
    }
    const custom_char = options?.characters? options.characters: DEFAULT_CUSTOM_CHAR
    const length = (options?.length? options?.length: DEFAULT_LENGTH) - (custom_char === ''? 2: 0)
    // for node.js sr is always set secure to true.
    const secure = true;
    // for browser need to check secure
    // default is false
    // let secure = sr.isSecureSupported? true: false;
    let password = '';
    do {
      password = sr({secure: secure, length: length, chars: custom_char, suffix: custom_char === ''? '!0': '' }) 
      console.log(`🤴🐉✨ ${password}`)
    }
    while(notPass(password))
    return password 
}