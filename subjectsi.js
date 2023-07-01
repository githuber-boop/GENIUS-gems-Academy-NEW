var dropdown1 = document.getElementById("dropdown1(2)");
var dropdown2 = document.getElementById("dropdown2(2)");
var resultDiv = document.getElementById("result");
var button = document.getElementById("button");

dropdown1.addEventListener("change", updateResult);
dropdown2.addEventListener("change", updateResult);

function updateResult() {
  var option1 = dropdown1.value;
  var option2 = dropdown2.value;

  // Clear previous result
  resultDiv.innerHTML = "";




  // Check the combination of options and display the corresponding text
  if (option1 === "Mathematics" && option2 === "Class 8") {
    resultDiv.innerHTML = "<b>Rational Numbers</b> <b>Linear Equation in One Variable</b> <b>Understanding Quadrilaterals</b>   <b>Practical Geometry</b>  <b>Data Handling</b>   <b>Squares and Square Roots</b>  <b>Cubes and Cube Roots</b> <b>Comparing Quantities</b>  <b>Algebraic Expressions and Identities</b> <b>Visualising Solid Shapes</b> <b>Mensuration</b> <b>Exponents and Powers</b> <b>Direct and Inverse Proportions</b> <b>Factorisation</b> <b>Introduction to Graphs</b> ";
    button.style.display =  "inline-block"
  } else if (option1 === "Mathematics" && option2 === "Class 9") {
    resultDiv.innerHTML = "<b>Number systems</b> <b>Polynomials</b> <b>Coordinate geometry</b>   <b>Linear equations in two variables</b>  <b>Lines and angles</b>   <b>Triangles</b>  <b>Quadrilaterals</b>  ";
    button.style.display =  "inline-block"
  } else if (option1 === "Mathematics" && option2 === "Class 10") {
    resultDiv.innerHTML = "<b>Real numbers</b> <b>Polynomials</b> <b>Pair of linear equations in two variables</b>   <b>Quadratic equations</b>  <b>Arithmetic progressions</b>   <b>Coordinate geometry</b> ";
    button.style.display =  "inline-block"
  } 

  if (option1 === "Computer Science" && option2 === "Class 11") {
    resultDiv.innerHTML = "<b>Computer System</b>  <b>Encoding Schemes and Number Systems</b> <b>Emerging Trends</b> <b>Introduction to Problem-Solving</b> <b>Getting Started with Python</b> <b>Flow of Control</b> <b>Functions</b> <b>Strings</b> <b>Lists</b> <b>Tuples and Dictionaries</b> <b>Societal Impact</b>";
    button.style.display =  "inline-block"
  } else if (option1 === "Science" && option2 === "Class 12") {
    resultDiv.innerHTML = "<b>Computer Systems and Organisation</b>  <b>Computational Thinking and Programming using Python and mySQL </b> <b>Society, Law and Ethics</b>";
    button.style.display =  "inline-block"
  } else if (option1 === "Computer Science" && option2 === "Class 10") {
    resultDiv.innerHTML = "Only Class 11 & Class 12 ";    
    button.style.display =  "inline-block"
  } else if (option1 === "Computer Science" && option2 === "Class 9") {
    resultDiv.innerHTML = "Only Class 11 & Class 12 ";    
    button.style.display =  "inline-block"
  } else if (option1 === "Computer Science" && option2 === "Class 8") {
    resultDiv.innerHTML = "Only Class 11 & Class 12 ";    
    button.style.display =  "inline-block"
  }



  // Show or hide the result div based on whether a combination was selected
  resultDiv.style.display = resultDiv.innerHTML !== "" ? "block" : "none";
}

if (option1 === "Mathematics" ) {
  class8 = document.getElementsByClassName("hidden-maths");
  class8.remove()
 }
