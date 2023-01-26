/*
  file path **node easy/Reverse\ a\ Linked\ \List/reverseLinkedList**

  Given the head of a singly linked list, reverse the list, and return the reversed list.

  Example:
  head = [1,2,3,4,5]
  return = [5,4,3,2,1]

  Constraints:
  The number of nodes in the list is the range 0-5000
  */

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
