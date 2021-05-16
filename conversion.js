//***************************conversion and coercion************************** */
let number=34;
console.log(number,typeof(String(34)));
let a="24";
console.log(a,typeof(Number("24")));
console.log(number,typeof(number.toString()));
let int=34.098;
console.log(parseInt(int));
console.log(parseFloat(int));
console.log(int.toFixed(2));
//***************coercion***** */
let x=23;
let y="45";
console.log(x+y);///coercion converts one type to another type
console.log(x-y);
console.log(x/y);
console.log(x*y);
console.log(x>y);