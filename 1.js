// varibles and constants
const a = 1; // constant - cannot be changed
let b = 2; // variable - canot be redeclared but can be changed
var c = 3; // variable - can be redeclared and changed
console.log(a, b, c);

const accountId = 144532;
let accountEmail = "ishan@voho.in";
var accountName = "Ishan Sharma";
console.table([accountId, accountEmail, accountName]);

/*
    Prefer using const over let and var
    Use let when you need to reassign the value
    
    Use var only when you need to redeclare the variable  - avoid using var - because of issues in hoisting and scope
    Use const for everything else

    Use camelCase for variable names
    Use PascalCase for class names
*/
