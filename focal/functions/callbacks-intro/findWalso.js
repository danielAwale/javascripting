const findWaldo = function(names, found) {
  for (let i = 0; i < names.length; i++) {
    let name = names[i];
    if (name === "Waldo") {
      // Add the indexof method under the found(parameter to connect it with the callback function)
      found(names.indexOf("Waldo"));   // execute callback
    }
  }
}

const actionWhenFound = function(index) {
  console.log(`Found him! at index ${index}`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

console.log("__________________________________")

// FOR EACH METHOD
// const findWaldo = function(names, found){
// names.forEach((element,index) => {
//   if(names[index] === "Waldo"){
//     found(names.indexOf("Waldo"));
//   }
// })
// }

// const actionWhenFound = function(theindex) {
//   console.log(`Found him! at index ${theindex}`);
// }


// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);









// Did you know that we can pass results via callback functions?

// Instruction
// Modify the callback function in the previous example so that it accepts a single argument index and logs it. The problem should therefore output something like "Found Waldo at index 2!".

// Copy the waldo searching code above into the JS file
// Run it via terminal to make sure that it is working as expected
// Modify the actionWhenFound function to let it receive and use the index
// Modify the findWaldo function so that it passes the index array to the callback