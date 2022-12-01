/*
  Conditionals
  ---------------------------------
  Add an if statement to check Daniel's role in a CYF class.
  If Daniel is a mentor, print out "Hi, I'm Daniel, I'm a mentor."
  If Daniel is a student, print out "Hi, I'm Daniel, I'm a student."
*/

let name = "Daniel";
let danielsRole = "mentor";

if (name === "Daniel" && danielsRole === "mentor") {
console.log("Hi, I'm Daniel, I'm a mentor.");
} else if (name === "Daniel" && danielsRole === "student") {
  console.log("Hi, I'm Daniel, I'm a student.");
} else {
  console.log ("Hi, stranger");
};

// EXPECTED RESULT
// ---------------
// Hi, I'm Daniel, I'm a mentor.
// */
