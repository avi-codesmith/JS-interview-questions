// hoisting Questions


// In Variables

console.log(me);
console.log(job);
console.log(year);

var me = "jonas";
let job = "teacher";
const year = 1991;

// In Functions

console.log(funcDel(1, 2));
console.log(funcEx(1, 2));
console.log(funcExArrow(1, 2));

function funcDel(a, b) {
  return a + b;
}

const funcEx = function (a, b) {
  return a + b;
};

const funcExArrow = (a, b) => a + b;
