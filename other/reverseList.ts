import { ListNode } from "./ListNode";

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  function reverse(curr: ListNode, parent: ListNode): ListNode | null {
    const next = curr.next;

    curr = new ListNode(curr.val, parent);

    if (!next) {
      return curr;
    }
    return reverse(next, curr);
  }

  return reverse(head, null);
}

const list1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log("Test 1", reverseList(list1));

const list2 = new ListNode(1, new ListNode(2));
console.log("Test 2", reverseList(list2));

const list3 = new ListNode();
console.log("Test 3", reverseList(list3));

const list4: ListNode = null;
console.log("Test 4", reverseList(list4));
