class Queue{
    constructor(){
        storage={}
        front=0
        end=0
    }

    queue(elem){
        this.storage[length]=elem
        this.end++
    }

    dequeu(){
        
        var rem = this.storage[this.front]
        delete this.storage[this.front]
        this.front++
        return rem
    }

    size(){
        return this.end-this.front+1
    }

    peek() {
        return this.storage[this.front]
        }
}