/*
What if you have a recursive structure, but you want to make a
modification to the structure? But, you don't want to mutate
the structure, but instead, make a new version of the structure?

What would you use? A recursive function!

Take one of the structural types defined in the other files, 
build a structure of it. Then write a function to change each
data value of the tree. For example: 
*/

import { BinaryTreeNode } from "./02-binary-tree";

const node: BinaryTreeNode = {
    data: "a",
    left: {
        data: "b",
        left: {
            data: "c",
            left: null,
            right: null
        },
        right: {
            data: "d",
            left: null,
            right: null
        }
    },
    right: {
        data: "e",
        left: {
            data: "f",
            left: null,
            right: null
        },
        right: {
            data: "g",
            left: null,
            right: null
        }
    }
};

function convertToUpperCase(node: BinaryTreeNode): BinaryTreeNode {
    
}