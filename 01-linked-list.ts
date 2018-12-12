/*
Linked lists are commonly depicted as a linear list:
+---+    +---+    +---+   +---+
| 🍌|--->| 🍉 |--->| 🍋|---| 🍑|---||
+---+    +---+    +---+   +---+

But they are in fact recursive structures:
*/

export interface LinkedListNode {
    data: string;
    // `next` is a pointer to the next node, which
    // is where the recursion occurs. This pointer
    // could optionally be null, which means the list
    // ends with this node.
    next: LinkedListNode | null;
}

/*
Here is an example linked list of fruit (which represents the
    one diagramed above):
*/
const node: LinkedListNode = {
    data: "🍌",
    next: {
        data: "🍉",
        next: {
            data: "🍋",
            next: {
                data: "🍑",
                next: null
            }
        }
    }
};

// Collect all the fruit!!! Return a string containing
// each fruit in the linked list
function collectAllFruit(node: LinkedListNode): string {

}

console.log(collectAllFruit(node));