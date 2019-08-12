// Event Delegation
/// Event delegation allows you to avoid adding event listeners to specific nodes. Instead the event listener is added to one parent

// document.getElementById("parent-list").addEventListener("click", function(e) {
//   // e.target is the clicked element
//   if(e.target && e.target.nodeName == "LI") {
//     // List item found - Output the ID!
//     console.log("List item", e.target.id.replace("post-", ""), "was clicked!")
//   }
// });


// Get the parent DIV and add a click listener
document.getElementById("myDiv").addEventListener("click", function(e) {
  if(e.target.matches("a.classA")) {
    console.log("Anchor element clicked!");
  }
});

// You can focus on things over and over and the callback event will NEVER run!

document.addEventListener("focus", function(e) {
  console.log(e.target.name);
// USE CAPTURE
}, true);
