var sr = require('simple-random');
const DEFAULT_LENGTH = 8;
const DEFAULT_CUSTOM_CHAR = '';
module.exports = (options) => {
    if(options?.length !== undefined && (typeof options?.length) !== 'number') {
      throw new Error("Invalid options");    
    }
    if (options?.characters !== undefined && options?.characters === '') {
      throw new Error("Invalid options");    
    }
    const custom_char = options?.characters? options.characters: DEFAULT_CUSTOM_CHAR
    const length = (options?.length? options?.length: DEFAULT_LENGTH) - (custom_char === ''? 2: 0)
    const password = sr({secure:true, length: length, chars: custom_char, suffix: custom_char === ''? '!0': '' }) 
    return password 
}