class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor(){
        this.head = null
        this.sie = 0
    }

    isEmpty(){
        return this.sie === 0
    }

    getSie(){
        return this.sie
    }

    prepend(value){
        const node = new Node(value)
        if (this.isEmpty()){
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.sie++
    }
    append(value){
        const node = new Node(value)
        if (this.isEmpty()){
            this.head = node
        } else {
            let prev = this.head
            while(prev.next){
                prev = prev.next
            }
            prev.next = node
        }
        this.sie++
    }
    insert(value,index){
        if (index < 0 || index > this.sie){
            return
        }
        if (index === 0){
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index-1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.sie++
        }
    }
    removeFrom(index){
        if (index < 0 || index >= this.sie){
            return null
        }
        let removeNode
        if (index === 0){
            removeNode = this.head
            this.head = this.head.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++){
                prev = prev.next
            }
            removeNode  = prev.next
            prev.next = removeNode.next
        }
        this.sie--
        return removeNode.value
    }

    removeValue(value){
        if (this.isEmpty()){
            return null
        }
        if (this.head.value === value){
            this.head = this.head.next
            this.sie--
            return value
        } else {
            let prev = this.head
            while (prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if (prev.next){
                const removedNode = prev.next
                prev.next = removedNode.next
                this.sie--
                return value
            }
            return null
        }
    }

    search(value){
        if (this.isEmpty()){
            return -1
        }
        let i = 0
        let curr = this.head
        while(curr){
            if (curr.value === value){
                return i
            }
            curr = curr.next
            i++
        }
        return -1
    }

    reverse(){
        let prev = null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }
    print(){
        if (this.isEmpty()){
            console.log('List is empty')
        } else {
            let curr = this.head
            let listValues = ''
            while(curr){
                listValues += `${curr.value}`
                curr = curr.next
            }
            console.log(listValues)
        }
    }
    prepend(value){
      const node = new Node()
        if (this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.sie++
    }

    append(value){
      const node = new Node()
        if (this.isEmpty()){
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.sie++
    }
    removeFromFront(){
        if (this.isEmpty()){
            return null
        }
        const value = this.head.value
        this.head = this.head.next
        this.sie--
        return value
    }

    removeFromEnd(){
        if (this.isEmpty()){
            return null
        }
        const value = this.tail.value
        if (this.sie ===1){
            this.head = null
            this.tail = null
        } else{
            let prev = this.head
            while(prev.next !== this.tail){
                prev = prev.next
            }
            prev.next = null
            this.tail = prev
        }
        this.sie--
        return value
    }
}

// let module;
module.exports = linkedList

// const list = new linkedList()
// console.log('List is empty?',list.isEmpty())
// console.log('List sie',list.getSie())
// list.print()
//
// list.append(1)
// list.append(2)
// list.append(3)
// list.prepend(0)
// list.print()
// console.log('list sie',list.getSie())
//
// list.removeFromFront()
// list.print()

// list.prepend(10)
// list.print()

// list.prepend(20)
// list.prepend(30)

// list.insert(30,1)
// list.print()

// list.insert(40,2)
// list.print()
// console.log(list.getSie())

// console.log(list.search(60))

// list.reverse()
// list.print()
// console.log(list.removeFrom(10))

// console.log(list.removeFrom(0))

// console.log(list.removeFrom(1))
// list.print()
// console.log(list.getSie())

// console.log(list.removeValue(40))
// list.print()

// console.log(list.removeValue(20))
// list.print()

// console.log(list.removeValue(60))
// list.print()

// console.log(list.getSie())

