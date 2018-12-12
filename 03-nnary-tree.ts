/*
Why stop at 2 pointers? Why not unlimited pointers???
The `TreeNode` definition below gives you that.
*/

export interface TreeNode {
    data: string,
    children: TreeNode[]
};

const node: TreeNode = {
    data: "🍒",
    children: [
        {
            data: "🍓",
            children: [
                {
                    data: "🍇",
                    children: [
                        {
                            data: "🥑",
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            data: "🍊",
            children: [
                {
                    data: "🍇",
                    children: []
                },
                {
                    data: "🍐",
                    children: []
                },
                {
                    data: "🥥",
                    children: []
                }
            ]
        }
    ]
}

function collectAllFruit(node: TreeNode): string {
    
}

console.log(collectAllFruit(node));