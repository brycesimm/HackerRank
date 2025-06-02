const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

function hasCycle(list){
    let nodeArr = [];
    while(list.next !== null){
        if(nodeArr.includes(list)){
            return true;            
        }
        nodeArr.push(list);
        list = list.next;
    }
    return false;
}

let head = new SinglyLinkedListNode(1);
head.next = new SinglyLinkedListNode(2);
head.next.next = new SinglyLinkedListNode(3);
console.log(hasCycle(head));
head.next.next.next = head;

console.log(hasCycle(head));