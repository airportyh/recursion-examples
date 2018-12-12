import * as esprima from "esprima";
import * as util from "util";

/*
Esprima is a JavaScript parser module from npm. It conviniently
parses JavaScript code for you, converting the code into a
recursive structure:
*/

const node: esprima.Program = esprima.parseScript("let n = 1; let m = 2;");

console.log(util.inspect(node, { depth: 100 }));

// print all variables declared in this program
function printVariables(node: esprima.Program): void {

}

// Replace number literals with their doubled values
function doubleTheNumberLiterals(node: esprima.Program): esprima.Program {

}