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

    }
    //adds a new node containing value to the start of the list
   


}