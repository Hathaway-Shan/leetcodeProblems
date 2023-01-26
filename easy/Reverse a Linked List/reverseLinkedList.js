/*
  file path **node easy/Reverse\ a\ Linked\ \List/reverseLinkedList**

  Given the head of a singly linked list, reverse the list, and return the reversed list.

  Example:
  head = [1,2,3,4,5]
  return = [5,4,3,2,1]

  Constraints:
  The number of nodes in the list is the range 0-5000
  */

//Node problems can be approached from an iterative or recursive angle

//1. the recursive solution

function reverseList(head) {
  //this supplies an exit condition
  if (head === null || head.next === null) {
    return head;
  }
  //this moves us forward in the call stack until we arrive at the end of the list
  let reverseHead = reverseList(head.next);

  //in these two lines we adjust our pointers to reverse the stack
  head.next.next = head;
  head.next = null;

  //we return up the call stack with the evaluated result of reverseList()
  return reverseHead;
}

function reverseListIterative(head) {
  //set a reference to the incoming linked list
  let ref = head;

  //add a return conditional if the incoming list is empty
  if (ref === null) return ref;

  //we set several pointers to track the current node, node before it, and node after it
  let currentNode = ref;
  let prevNode = null;
  let nextNode = null;

  //traverse the list to adjust links
  //during each loop we reverse the linked lists in place
  /*
  the pattern we are looking for is:
  nextNode becomes prevNode
  prevNode becomes currentNode
  currentNode becomes nextNode

  */
  while (currentNode) {
    // we define the node to the right (next) as the next node from current
    nextNode = currentNode.next;

    currentNode.next = prevNode;
    // we define the node to the left (previous) as the the current node
    prevNode = currentNode;

    currentNode = nextNode;
    // we don't actually need this line but it does increase performance
    // this detaches our next node since we have already set the first two places
    // it is now ready to be refined as the next node from our new current on the next pass
    nextNode = null;
  }

  //reset the head
  ref = prevNode;
  return ref;
}
