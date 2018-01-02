class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(rootNode=null){
        this.root = rootNode
    }
    //插入
    insert(newNode){
        if(this.root === null){
            this.root = newNode;
        }else{
            BinaryTree.insertNode(this.root,newNode)
        }
    }
    //获取最小
    getMinNode(){
        return BinaryTree.minNode(this.root);
    }
    //获取最大
    getMaxNode(){
        return BinaryTree.maxNode(this.root);
    }
    //查找
    search(target){
        return BinaryTree.searchNode(this.root,target.key);
    }
    //中序遍历
    inOrderTraverse(callback){
        BinaryTree.inOrderTraverseNode(this.root,callback)
    }
    //前序遍历
    preOrderTraverse(callback){
        BinaryTree.preOrderTraverseNode(this.root,callback)
    }
    //后序遍历
    postOrderTraverse(callback){
        BinaryTree.postOrderTraverseNode(this.root,callback)
    }
    //删除节点
    remove(target){
        this.root = BinaryTree.removeNode(this.root,target.key);
    }
    static minNode(node){
        if(node){
            while (node && node.left !== null){
                node = node.left
            }
            return node
        }
        return null
    }
    static maxNode(node){
        if(node){
            while (node && node.right !== null){
                node = node.right
            }
            return node
        }
        return null
    }
    static searchNode(node,key){
        if(node === null){
            return false
        }
        if(key === node.key){
            return true
        }else if(key < node.key){
            return BinaryTree.searchNode(node.left,key)
        }else{
            return BinaryTree.searchNode(node.right,key)
        }
    }
    static inOrderTraverseNode(node,callback){
        if(node!==null){
            BinaryTree.inOrderTraverseNode(node.left,callback);
            BinaryTree.callback(node);
            BinaryTree.inOrderTraverseNode(node.right,callback)
        }else return
    }
    static preOrderTraverseNode(node,callback){
        if(node!==null){
            BinaryTree.callback(node);
            BinaryTree.preOrderTraverseNode(node.left,callback);
            BinaryTree.preOrderTraverseNode(node.right,callback)
        }else return
    }
    static postOrderTraverseNode(node,callback){
        if(node !== null){
            BinaryTree.postOrderTraverseNode(node.left,callback);
            BinaryTree.postOrderTraverseNode(node.right,callback);
            BinaryTree.callback(node);
        }else return

    }
    static removeNode(node,key){
        if(node===null){
            return null
        }
        if(key < node.key){
            node.left = BinaryTree.removeNode(node.left,key)
            return node
        }else if(key > node.key){
            node.right = BinaryTree.removeNode(node.right,key)
            return node
        }else{
            if(node.left === null && node.right ===null){
                node = null;
                return node;
            }
            if(node.left === null){
                node = node.right;
                return node;
            } else if(node.right === null){
                node = node.left;
                return node
            }else{
                let aux = BinaryTree.minNode(node.right);
                node.key = aux.key;
                node.right= BinaryTree.removeNode(node.right,aux.key);
                return node
            }
        }

    }
    static callback(node){
        console.log(node.key)
    }
    static insertNode(node,newNode){
        if(newNode.key < node.key){
            if(node.left === null){
                node.left = newNode
            }else{
                BinaryTree.insertNode(node.left,newNode)
            }
        }else{
            if(node.right === null){
                node.right = newNode
            }else{
                BinaryTree.insertNode(node.right,newNode)
            }
        }
    }

    static createBinaryTreeByArry(array){
        let binatyTree = new BinaryTree();
        nodes.forEach(key=>{
            let newNode = new Node(key)
            binatyTree.insert(newNode)
        })
        return binatyTree
    }
}

