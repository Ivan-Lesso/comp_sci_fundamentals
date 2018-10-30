/*
FUNCTION push(element)
CREATE node
SET node.value TO element
SET node.next TO null

IF the head node does not exist
 THEN SET head to node
ELSE
 SET current to head
 SET current.next to node
END IF
END FUNCTION
*/
class LinkedList {
    constructor(value) {
        this.head = null;
        this.currentId = 0;
        this.push(value);
    }

    push(value) {
      const newNode = {};
      this.currentId++;
      newNode.id = this.currentId;
      newNode.value = value;
      newNode.next = null;

      let lastNode = this.head;

      if(lastNode === null) this.head = newNode;
      else {
        while(lastNode.next!==null)
        {
          lastNode = lastNode.next;
        }
        lastNode.next = newNode;
      }

      return this;
    }
    deduplicate() {
      debugger;
      let lastNode = this.head;
      while(lastNode.next!==null)
      {
        let newNode = this.head;
        if(newNode.value === lastNode.value && newNode.id !== lastNode.id) { //check head first
          this.head = this.head.next;
        }
        while(newNode.next!==null)
        {
          if(newNode.next.id!==lastNode.id && newNode.next.value===lastNode.value) {
            newNode.next = newNode.next.next;
            newNode = newNode.next.next;
          }
          else newNode = newNode.next;
        }
        lastNode = lastNode.next;
      }
      return this;
    }
}
const list = new LinkedList('first');
list.push('third');
list.push('second');
list.push('third');
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);
console.log(list.head.next.next.next);
list.deduplicate();
console.log(list.head);
console.log(list.head.next);
console.log(list.head.next.next);
console.log(list.head.next.next.next);
