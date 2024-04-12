class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return head;

  function reverse(curr, parent) {
    const next = curr.next;

    curr = new ListNode(curr.val, parent);

    if (!next) return curr;
    return reverse(next, curr);
  }

  return reverse(head, null);
}

const list1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);
console.log("Test 1", reverseList(list1));

const list2 = new ListNode(1, new ListNode(2));
console.log("Test 2", reverseList(list2));

const list3 = new ListNode();
console.log("Test 3", reverseList(list3));

const list4 = null;
console.log("Test 4", reverseList(list4));
