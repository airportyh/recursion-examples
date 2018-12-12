/*
This is a binary tree:

          +---+
          | 6 |
       +--+---+-+
       |        |
     +-v-+    +-v-+
     | 3 |    | 7 |
 +---+--++    +---+-+
 |      |     |     |
+v+    +v+   +v+   +v+
|2|    |4|   |6|   |8|
+-+    +-+   +-+   +-+

Its structure is just like that of a linked list, except
that it has one extra pointer to another node.
Here is its definition below:
*/

export interface BinaryTreeNode {
    data: string;
    left: BinaryTreeNode | null;
    right: BinaryTreeNode | null;
}

// This is an example binary tree:
const node: BinaryTreeNode = {
    data: "🍒",
    left: {
        data: "🥝",
        left: {
            data: "🥑",
            left: null,
            right: null
        },
        right: {
            data: "🍓",
            left: null,
            right: null
        }
    },
    right: {
        data: "🍊",
        left: {
            data: "🍇",
            left: null,
            right: null
        },
        right: {
            data: "🍐",
            left: null,
            right: null
        }
    }
}

function collectAllFruit(node: BinaryTreeNode): string {

}

console.log(collectAllFruit(node));