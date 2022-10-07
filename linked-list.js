class LinkedList {
    constructor(head=null) {
        this.length = 0;
        this.head = head;
    }  
    // Function adds a new node containing a value to the end of the list
    append(value) {
        let node = new Node(value)
        if (this.head === null) {
            this.head = node; 
        }
        else {
            let currentNode = this.head; 
            
            while(currentNode.next !== null) {
                currentNode = currentNode.next; 
            } 
            currentNode.next = node; 
        }  
        this.length++ 
    }
    // Function adds a new node containing a value to the start of the list
    prepend(value) {
        let node = new Node(value);
       
        if (this.head === null) {
            this.head = node;
            return this.head; 
        }
        else{
            node.next = this.head; 
            this.head = node;  
        }
        this.length++
        return this.head; 
    }
    //Function that returns the total number of nodes in the list
    size() {
        return this.length; 
    }
    //Function that returns first node in the list
    getHead() {
        return this.head;
    }
    //Function that returns the last node in the list
    tail() {
        if (this.head === null) return this.head; 
        else {
            let currentNode = this.head; 

            while(currentNode.next !== null) {
                currentNode = currentNode.next; 
            }
            return currentNode; 
        }
    }
    //Function that returns the node at the given index
    at(index){
        let currentNode = this.head; 
        while(currentNode !== null){
            if (currentNode.data === index){
                return currentNode;
            } 
            currentNode = currentNode.next; 
        }
        return; 
    }
    //Function that removes the last element from the list
    pop() {
        let currentNode = this.head; 
        let previousNode; 

        if(currentNode === null) return
        else {
            while(currentNode.next !== null){
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            previousNode.next = currentNode.next;
        }
        this.length--
    }
    //Function that returns true if the passed in value is in the list and otherwise returns false.
    contains(value){
        let currentNode = this.head;

        while(currentNode !== null) {
            if (currentNode.data === value) { 
                return true; 
            }
            currentNode = currentNode.next
        }
        return false; 
        
    }
    //Function that returns the index of the node containing value, or null if not found.
    find(value){
        let currentNode = this.head; 
        let index = -1; 

        while(currentNode !== null){
            index++
            if(currentNode.data === value) {
                return index; 
            }
            currentNode = currentNode.next; 
        }
        return null; 
    }

    toString() {
        if(this.head == null) return null; 
        let currentNode = this.head;
        let string = ''
        while(currentNode !== null) {
            string = `${string} ${currentNode.data} ->`
            currentNode = currentNode.next
        }
        return string + ' null'; 
        
    }

}

class Node {
    constructor(data) {
        this.data = data,
        this.next = null
    }
}

const list = new LinkedList()
list.append('kitten')
list.append('puppy')
list.append('dog')
list.prepend('cat')
list.prepend('fish')
console.log(list.size())
console.log(list.tail())
console.log(list.getHead())
console.log(list.pop())
console.log(list.at('cat'))
console.log(list.contains('shark'))
console.log(list.find('fish'))
console.log(list.find('shark'))
console.log(list.toString())
