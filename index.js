function isPalindrome(word) {
  // Write your algorithm here
  if(word === word.split("").reverse().join("")){return true}
  return false;
}

/* 
  Add your pseudocode here
  If the word is equal to the reverse organization, it is a palindrome. 
*/

/*
  Add written explanation of your solution here
  1. split the word 
  2. use the Array.prototype.reverse() method to reverse the elements order
  3. join the elements with .join("")
  4. compare the word with the reverse and if equal, return true
  5. otherwise, return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
