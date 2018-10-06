'use strict';
const stackClass = require ('./buildStack');
// const stack = new stackClass(); don't need this--why was I thinking we do

function main() {
  let starTrek = new stackClass();

  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  
  // console.log(JSON.stringify(starTrek));

  function peek(stk) {
    console.log(stk.top.data);
  }
  
  function display(stk) {
    let tempNode = stk.top;
    while (tempNode !== null) {
      console.log(tempNode.data);
      tempNode = tempNode.next;
    }
  }

  function removeOne(stk, item) {
    let tempNode = stk.top;
    let prevNode = stk.top;
    if (stk.top === null) {
      return null;
    }
    while (tempNode.data !== item && tempNode.next !== null) {
      prevNode = tempNode;
      tempNode = tempNode.next;
    }
    if (tempNode.next === null) {
      return new Error ('Item not found');
    }
    prevNode.next = prevNode.next.next;
    return(JSON.stringify(starTrek));
  }
  
  // peek(starTrek);
  // display(starTrek);
  console.log(removeOne(starTrek, 'Spock'));

}

// main();

//PALINDROMES

function is_palindrome(s) {
  let forwardStack = new stackClass;
  let reverseStack = new stackClass;
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  twoStack(s);
   
  function twoStack(str) {
     // base case
    if (str.length < 1) { 
      return;
    }
    //recursive case
    forwardStack.push(str[0]);
    reverseStack.push(str[str.length-1]); 
    twoStack(str.slice(1, str.length-1)); 
  }
  console.log(JSON.stringify(forwardStack));
  console.log(JSON.stringify(reverseStack));
  if (forwardStack.data === reverseStack.data) {
    return true;
  } else {
    return false;
  }
}

// true, true, true
// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));


