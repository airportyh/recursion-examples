/*
This tree represents a math operation 1 + 1:

     +---+
     | + |
  +--+---+-+
  |        |
+-v-+    +-v-+
| 1 |    | 1 |
+---+    +---+

But operations could be nested. For example (2 + 4) * 5. That
yields this tree:

           +---+
           | * |
        +--+---+--+
        |         |
      +---+     +-v-+
      | + |     | 5 |
  +---+-+-++    +---+
  |        |
+-v-+    +-v-+
| 2 |    | 4 |
+---+    +---+

*/

// This is the recursive definition of the tree:
export interface Computation {
    operator: "+" | "-" | "*" | "/";
    left: Computation | number;
    right: Computation | number;
}

const computation: Computation = {
    operator: "*",
    left: {
        operator: "+",
        left: 2,
        right: 4
    },
    right: 5
};

// perform the computation given represented as a tree:
function compute(computation: Computation): number {

}

// convert the tree back to the math equation as a string for example:
// "(2 + 4) * 5"
function toEquation(computation: Computation): number {
    
}