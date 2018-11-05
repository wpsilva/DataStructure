var array1 = [2,4,5,6,7,9,11]
var raiz1 = [-1,4,5,0,4,0,2,3]
var array2 = [9,12,14,17,19,23,50,54,67,72,76]
var raiz2 = [-1,6,8,7,1,6,0,8,1,5]
/*
console.log("Quantidade Array1 " + array1.length);
console.log("Raiz Array1 " + raiz1.length);
console.log("Quantidade Array1 " + array1.length);
console.log("Raiz Array2 " + raiz2.length);
*/

let arvore = {
    left: {
        left: undefined
        , righ: undefined
        , value: 0
    }
    , right: undefined
    , value: 10
}

function preOrder(tree){
    console.log(tree.value);
    tree.left && preOrder(tree.left);
    tree.right && preOrder(tree.right);
}

console.log(preOrder(arvore));

function inOrder(tree){
    console.log(tree.value);
    preOrder(tree.left);
    preOrder(tree.right);
}

function posOrder(tree){
    console.log(tree.value);
    preOrder(tree.left);
    preOrder(tree.right);
}