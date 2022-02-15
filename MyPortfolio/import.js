import {PI} from "./export.js"; 
console.log(PI);
// import {cube} from "./export.js";
import exportval from "./export.js";
// import findmax from "./export.js";
// console.log(cube)
console.log(exportval.cube(3));
/*or 
let returnval = cube(3)
console.log(returnval)  */
console.log (exportval.findmax([-1,10,0,15,-5]));


// notes:
// [object object] 
// console.log(JSON Stringify(console) 