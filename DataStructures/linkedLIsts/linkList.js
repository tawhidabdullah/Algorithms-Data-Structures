class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

///////////////////// singleyLinkedList ///////////////////////////////////////////////////

class singleyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(data) {
    // create a new node
    const newNode = new node(data);

    //special case: no items in the list yet
    if (!this.head) {
      // just set the head to the new node
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; // Set tail point to new node
      this.tail = newNode; // Update the tail by newNode
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;

    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return currentNode;
  }

  ushift(data) {
    // create a new node
    const newNode = new node(data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let oldHead = this.head;
      this.head = newNode; // Set newNode to new head
      this.head.next = oldHead; // Set New Head's next pointer to oldHead
    }
    this.length++;
    return this;
  }

  shift() {
    if (!this.head) return undefined;
    let currentHead = this.head;
    let newHead = currentHead.next; // Set current Head Next pointer to newHead;
    this.head = newHead;
    if (this.length === 1) {
      this.tail = null;
    }
    this.length--;
  }
}

const newList = new singleyLinkedList();
// newList.push("Tawhid");
// newList.push("The Great Tawhid Abdullah");
// newList.push("Destiny");
// newList.push("Abdullah");
// newList.pop();
// newList.pop();
// newList.pop();
// console.log(newList.pop());
// console.log(newList);

newList.ushift("The great Tawhid Abdullah");
newList.shift();
console.log(newList);
