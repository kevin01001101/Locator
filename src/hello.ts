

import {addNumbers} from './moduleTest';

export let k = "Hello";
let result = addNumbers(5, 55);
console.log(result);

export function runMe() {
  for(let i=0; i < 5; i++) {
    console.log('hello');
  }
};

console.log("what? huh?");
