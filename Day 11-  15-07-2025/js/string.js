msg = "Lorem ipsum dolor sit amet"
msg2 = String("value")

console.log(msg);
console.log(String.prototype);

console.log(msg.length);

console.log(msg[0]);
console.log(msg[1]);

let lastIndex = msg.length - 1
console.log(msg[lastIndex]);
console.log(msg[msg.length - 1]);

let find = msg.includes("o")
console.log(find);

// includes (sreach , start? , end?)
// indexOf (sreach , start? , end?f
// lastIndexOf (sreach , start?  end?
// trimStart()
// trimEnd()
// trim
// startsWith("string" , start?)
// endsWith("string" , length?)

msge = '    trim  '
console.log(msge.trimStart());
console.log(msge.trimEnd());
console.log(msge.trim());
console.log(msge.trim().toLocaleUpperCase());






