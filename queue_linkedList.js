const linkedList = require('./linked_list')
class queue_linkedList{
    constructor() {
        this.list = new linkedList()
    }

    enqueue(value){
        this.list.append(value)
    }

    dequeue(){
        return this.list.removeFromFront()
    }

    peek(){
        return this.list.head.value
    }

    isEmpty(){
        return this.list.isEmpty()
    }

    getSie(){
        return this.list.getSie()
    }

    print(){
        return this.list.print()
    }
}

const  queue = new queue_linkedList()
console.log(queue.isEmpty())

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
console.log(queue.getSie())
queue.print()

console.log(queue.dequeue())
queue.print()

console.log(queue.peek())