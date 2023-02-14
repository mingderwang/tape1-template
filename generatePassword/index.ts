var sr = require('simple-random');
import { Options } from './options';

const DEFAULT_LENGTH = 8;
const DEFAULT_CUSTOM_CHAR = '';
let regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+$/

const validPassword = (password: string, options: Options) => {
  if (options?.characters !== undefined && options?.characters !== '') {
    const pattern = `^[${options.characters}]+$` 
    const flags = 'gi'
    regex = new RegExp(pattern, flags);
  } 
    return regex.test(password);
}

export function generatePassword(options: Options): string {
  if(options?.length !== undefined && (typeof options?.length) !== 'number') {
    throw new Error("Invalid options");    
  }
  if (options?.characters !== undefined && options?.characters === '') {
    throw new Error("Invalid options");    
  }
  const custom_char = options?.characters? options.characters: DEFAULT_CUSTOM_CHAR
  const length: any = options?.length? options?.length: DEFAULT_LENGTH
  const minus = custom_char === ''? 2: 0
  let password = ''
  do {
    password = sr({secure:true, length: length - minus, chars: custom_char, suffix: custom_char === ''? '!0': '' }) 
    console.log(password)
  }
  while (!validPassword(password, options ))
  return password 
}

export { Options };