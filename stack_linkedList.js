// function require(s) {
//     return undefined;
// }

const linkedList = require('./linked_list')

class stack_linkedList{
    constructor() {
        this.list = new linkedList()
    }
    push(value) {
      return this.list.prepend(value)
    }
    pop(){
        return this.list.removeFromFront()
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
      return this.list.isEmpty()
    }
    getSie(){
       return  this.list.getSie()
    }

    print(){
        return this.list.print()
    }
}

const stack = new stack_linkedList()
console.log(stack.isEmpty())

stack.push(20)
stack.push(10)
stack.push(30)
console.log(stack.getSie())
stack.print()
//
console.log(stack.pop())
console.log(stack.peek())