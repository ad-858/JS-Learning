//***********************BMI using If else statements******************** */
let massOfMark=78;
let heightOfMark=1.69;
let massOfJohn=92;
let heightOfJohn=1.95;
let johnBMI=massOfJohn/heightOfJohn**2;
let markBMI=massOfMark/heightOfMark**2;
if(johnBMI>markBMI){
console.log(`John has heigher BMI ${johnBMI}`);
}
else{
    console.log(`Mark has Heigher BMI ${markBMI}`)
}
