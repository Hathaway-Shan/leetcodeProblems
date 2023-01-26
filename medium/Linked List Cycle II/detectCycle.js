/*

file path **node medium/Linked\ List\ Cycle\ II/detectCycle**

Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

There is a cycle in a linked list if there is some node in the list that can be reached again 
by continuously following the next pointer. Internally, pos is used to denote the index of the node
that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

Do not modify the linked list.

Example:
head = [3,2,0,-4]
pos = 1 **the tail connects to the the node at index 1

returns = 1;

Explanation:
There is a cycle in the linked list, where tail connects to the second node.
*/

function detectCycle(head) {
  /*
    we can use a Set over a dictionary here since we are dealing with a situation where
    the first repeat we see indicates a cycle
    if we never see a repeat then we can return null
     */
  let dict = new Set();

  while (head !== null) {
    if (dict.has(head)) {
      return head;
    } else {
      dict.add(head);
    }
    head = head.next;
  }
  //if the loop completed head is null and we can return it
  return head;
}
