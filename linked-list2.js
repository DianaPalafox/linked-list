function Node(data) {
    const data = data;
    const next = null; 

    return {next}
}

function LinkedList() {
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
    




    return (append, prepend)
}

let list = LinkedList();
console.log(list.append('puppy'))
console.log(list.append('kitten'))
console.log(list.prepend('cat'))

