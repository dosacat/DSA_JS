
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}


class LinkedList{
    constructor(){
        this.head=null
    }

    //operation to add to link list

    add(elem){
        var node= new Node(elem)

        //if head is null, assign node to head
        if(this.head==null){
            this.head=node
        }
        else{
            var currentNode=this.head

            while(currentNode.next){
                currentNode=currentNode.next
            }

            currentNode.next=elem
        }
        
    }

}