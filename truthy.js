// ***************************truthy and falsy values*************************/

const { ConsoleWriter } = require("istanbul-lib-report");

// there are five falsy values--0," ",nan,undefined &null//
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(""));
console.log(Boolean(NaN));
const salary=0;
if (salary){
    console.log("You can shop");
}
else{
    console.log("You need a job")
}