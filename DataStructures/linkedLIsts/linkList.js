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
    return currentHead;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let currentNode = this.head;
    let nodeCounter = 0;
    while (index !== nodeCounter) {
      currentNode = currentNode.next;
      nodeCounter++;
    }
    return currentNode;
  }

  set(index, data) {
    let nodeFound = this.get(index);
    if (!nodeFound) return false;
    nodeFound.val = data;
    return true;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode) {
      array.push(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log(array);
  }

  reverse() {
    let currentNode = this.head;
    this.head = this.tail; // destiny
    this.tail = currentNode; // Tawhid

    // [ 'Tawhid', , 'destiny', 'maal' ]
    // [ 'The Great Tawhid Abdullah','Tawhid' ] ==>   // we make the list backwards

    // HELPER VARIABLES
    let nexty = null;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      nexty = currentNode.next;
      currentNode.next = prev; // CurrentNode's next pointer will be the Previous Node ;
      prev = currentNode; // Set previous to CurrentNode
      currentNode = nexty; // In the next loop the currentNode will the the nexty
    }

    return this;
  }
}

const newList = new singleyLinkedList();
newList.push("Tawhid"); // ==>> /
newList.push("The Great Tawhid Abdullah");
newList.push("destiny");
newList.push("maal");

newList.printList();
newList.reverse();
newList.printList();
// console.log(newList);
