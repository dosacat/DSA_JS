class Stack{
    constructor(){
        this.store={}
        this.length=0
    }

    push(elem){
        this.store[this.length]=elem
        this.length++
    }

    //returns deleted element. 
    pop(){
        //check if stack is empty, return undefined
        if(this.length==0){
            return undefined
        }

        this.length--
        var deleted = this.store[this.length]
        delete this.store[this.length]
        return deleted
    }

    length(){
        return this.length;
    }


    //show last value
    peek(){
        return this.store[this.length-1]
    }

}

var test = new Stack()
test.push(2)
test.push(3)
test.push(1)
console.log(test.pop())
console.log(test.peek())