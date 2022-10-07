const Node = (value) => {
    let data = value; 
    let next = null; 

    return {data, next}
};

const LinkedList = () => {
    let head = null; 
    let lenght = 0;

    //adds a new node containing value to the end of the list
    const append = (value) => {
        if(head === null) {
            head = Node(value); 
        }
        else{
            let currentNode = head; 
            while(currentNode.next !== null){
                currentNode = currentNode.next; 
            }
            currentNode.next = Node(value); 
        }
        lenght++

    }
    //adds a new node containing value to the start of the list
    const prepend = (value) => {
        let node = Node(value)
        if(head === null) {
            head = node; 
            return head; 
        }
        else{
            node.next = head; 
            head = node; 
            
        }
        lenght++
        return head; 
    }
    //returns the total number of nodes in the list
    const size = () => {
        return lenght;
    }
    //returns the first node in the list
    const getHead = () => {
        return head; 
    }
    //returns the last node in the list
    const tail = () => {
        if (head === null) return;
        if(head.next === null) return head; 
        else {
            let currentNode = head; 
            while(currentNode.next !== null) {
                currentNode = currentNode.next; 
            }
            return currentNode; 
        }
    };
    //returns the node at the given index
    const at = (index) => {
        if (head === null) return
        else {
            let currentNode = head; 
            while(currentNode.data !== index) {
                currentNode = currentNode.next;
            }
            return currentNode; 
        }
    }

    return {append, prepend, size, getHead, tail};
};

let list = LinkedList();
list.append('puppy')
list.append('kitten')
list.append('fish')
list.prepend('cat')
console.log(list.size())
console.log(list.getHead())
console.log(list.tail())
console.log(list.at('puppy'))
