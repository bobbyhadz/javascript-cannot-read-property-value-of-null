// TypeError: Cannot read properties of null (reading 'value')

console.log('bobbyhadz.com');

const input = document.getElementById('first_name');
console.log(input); // 👉️ input#first_name

// ✅ Works
const value = input.value;
console.log(value); // 👉️ "Initial value"
