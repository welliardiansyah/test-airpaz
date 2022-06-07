const str = 'this music was good';
console.log(str);
let reversedStr = '';

for (let i = str.length - 1; i >= 0; i--) {
  reversedStr += str[i];
}

console.log(reversedStr);