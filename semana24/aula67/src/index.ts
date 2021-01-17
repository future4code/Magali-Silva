import { linkedList } from "./LinkedList";
import { myStack } from "./Stack";
import { queue } from "./Queue";

// linkedList.appendToTail("Nome")
// linkedList.appendToTail("Nome 2")
// console.log(linkedList.print())

// myStack.push("Magali")
// myStack.push("Mônica")
// myStack.push("Cebolinha")
// console.log(myStack);

// myStack.print()
// myStack.pop()
// myStack.print()

console.log(queue.isEmpty());

queue.enqueue("Magali")
queue.enqueue("Mônica")
queue.enqueue("Cebolinha")
console.log(queue)
console.log(queue.isEmpty());

console.log(queue.unqueue())
console.log(queue)
