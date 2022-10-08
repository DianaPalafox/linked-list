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
            let i = -1; 
            while(currentNode !== null) {
                i++;
                if(i === index) {
                    return currentNode;
                }
                currentNode = currentNode.next;
            }
        i = -1; 
        }
    }
    //removes the last element from the list
    const pop = () => {
       if(head == null) return; 
       else{
            let currentNode = head;
            let previousNode; 
           while(currentNode.next !== null){
               previousNode = currentNode
               currentNode = currentNode.next 
           }
           previousNode.next = null; 
       }
       lenght--
    }
    //returns true if the passed in value is in the list and otherwise returns false.
    const find = (value) => {
        if(head === null) return false; 
        if(head.data === value) return true;
        else{
            let currentNode = head; 
            while(currentNode !== null){
                if(currentNode.data === value) {
                    return true; 
                }
            currentNode = currentNode.next; 
            }
            return false; 
        }
    }
    const toString = () => {
        let currentNode = head; 
        let string = ''; 
        while(currentNode !== null){
            string = `${string} ${currentNode.data} ->`
            currentNode = currentNode.next; 
        }
        return string + ' null';
    }
    //EXTRAS
    //inserts a new node with the provided value at the given index.
    const insertAt = (value, index) => {
        let node = Node(value); 
        let i = -1; 
        if(head.next == null){
            i++
            if(i === index){
                head = node; 
                return head; 
            }
        }
        if(!head) return; 
        else{
            let currentNode = head; 
            while(currentNode !== null){
                i++
                if(i === index){
                    node.next = currentNode
                    currentNode = node; 
                    return currentNode; 
                }
                currentNode = currentNode.next; 
            }
        }
        lenght++
        i=-1;
        return currentNode; 
    }
    return {append, prepend, size, getHead, tail, at, pop, find, toString, insertAt};
};

let list = LinkedList();
list.append('puppy')
list.append('kitten')
list.append('fish')
list.prepend('cat')
list.pop()
console.log(list.getHead())
//console.log(list.tail())
//console.log(list.at(1))
//console.log(list.size())
//console.log(list.find('shark'))
console.log(list.insertAt('horsie', 1))
console.log(list.toString())
console.log(list.tail())
