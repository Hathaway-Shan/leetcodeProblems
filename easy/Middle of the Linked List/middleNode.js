/*
  file path **node easy/Middle\ of\ the\ Linked\ \List/middleNode**

  Given the head of a singly linked list, return the middle node of the linked list.

  If there are two middle nodes, return the second middle node.

  Example:
  head = [1,2,3,4,5]
  return = [3,4,5]

  Constraints:
  The number of nodes in the list is the range 1-100
  */

//iterative solution no hashMap

function middleNode(head) {
  //set a reference to the the incoming list
  let ref = head;
  let counter = 0;

  while (ref) {
    counter++;
    ref = ref.next;

    /*
      console.log(ref);
      [2,3,4,5]
      [3,4,5]
      [4,5]
      [5]
      null **this is why we subtract 1 later
       */
  }
  // console.log('COUNTER', counter) //returns 5

  //reset the value of our refenerce since we have cycled through the list
  ref = head;

  //reset the value of counter variable to find the center rounded up
  //subtract 1 or we will be off by one since the last value of ref is null
  counter = Math.ceil((counter - 1) / 2);
  // console.log(counter) //returns 3

  //in a new loop we decrement our new counter and move forward in the reset ref
  while (counter) {
    counter--;
    ref = ref.next;
  }
  //once the loop has finished we return the ref as the midpoint of the node list
  return ref;
}

//this can also be solved with a Map() although performance suffers

function middleNodeDict(head) {
  //set a reference to the the incoming list
  let ref = head;

  //guard for edge case there is only one node in the list
  //edge case must be set after we set our reference
  if (ref.next === null) {
    return ref;
  }

  let counter = 0;
  const m = new Map();

  while (ref) {
    counter++;
    ref = ref.next;

    //add counter as key ref as value to new hashMap
    m.set(counter, ref);
  }

  // console.log(m)
  /*
 returns:
  Map(5) {
  1 => [2,3,4,5],
  2 => [3,4,5],
  3 => [4,5],
  4 => [5],
  5 => null **once again we will wind up subtracting 1 because of this
  }
  */

  //remove the null (value counter - 2)
  //find the rightmost node key with Math.ceil() / 2
  counter = Math.ceil((counter - 1) / 2);
  // console.log(counter) //returns 2

  //return the lookup
  return m.get(counter);
}
