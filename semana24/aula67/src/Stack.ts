import { LinkedList } from "./LinkedList"
import { LinkedListNode } from "./LinkedListNode"

export class Stack {
    constructor (
        public nodes: LinkedList = new LinkedList
    ){}

    public isEmpty(): boolean {
       return this.nodes.start === undefined
    }

    public push(value: any): void {
        this.nodes.appendToTail(value)
    }

    public pop(): LinkedListNode | undefined {
        if (!this.nodes.start) {
            return undefined
        }

        const removedNode: LinkedListNode = this.nodes.start
        this.nodes.start = this.nodes.start.next
    
        return removedNode
    }    

    public print(): void {
        this.nodes.print()
    }

}

export const myStack: Stack = new Stack()