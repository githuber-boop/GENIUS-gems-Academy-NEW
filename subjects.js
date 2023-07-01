var dropdown1 = document.getElementById("dropdown1");
var dropdown2 = document.getElementById("dropdown2");
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
  if (option1 === "Mathematics" && option2 === "KS2") {
    resultDiv.innerHTML = "<b>Number</b> Place value, calculations <b>Algebra</b>' Simple formulae  <b>Geometry</b>  Properties of shapes  <b>Statistics</b>  Data handling  <b>Measurement</b>  Length, weight, capacity, time  <b>Problem-solving</b>  Real-life problems";
    button.style.display =  "inline-block"
  } else if (option1 === "Mathematics" && option2 === "KS3") {
    resultDiv.innerHTML = "<b>Number</b>  Calculations, decimals, fractions  <b>Algebra</b>  Equations, formulas, graphs <b>Ratio and proportion</b>  Scaling, rates of change  <b>Ratio and proportion</b>  Scaling, rates of change <b>Geometry</b>  Shapes, angles, transformations <b>Probability</b>  Chance, events <b>Statistics</b>  Data, representation";
    button.style.display =  "inline-block"
  } else if (option1 === "Mathematics" && option2 === "KS4") {
    resultDiv.innerHTML = "<b>Number</b>  Properties, manipulation, equations <b>Algebra</b>  Equations, functions, graphs <b>Geometry</b>  2D/3D shapes, trigonometry <b>Statistics</b>  Data handling, probability <b>Ratio and proportion</b>  Scaling, rates of change";
    button.style.display =  "inline-block"
  } 

  
  
  if (option1 === "Science" && option2 === "KS2") {
    resultDiv.innerHTML = "Living things and their habitats <b>Plants</b> <b>Animals, including humans</b> <b>Evolution and inheritance</b> <b>Rocks</b> <b>Light</b> <b>Forces and magnets</b> <b>Sound</b> <b>Earth and space</b> <b>Properties and changes of materials</b> <b>Electricity</b> <b>Scientific enquiry</b> ";
    button.style.display =  "inline-block"
  } else if (option1 === "Science" && option2 === "KS3") {
    resultDiv.innerHTML = "<b>Cells, tissues and organs</b>  <b>Reproduction in plants and animals</b> <b>Atoms, elements, and compounds</b> <b>Acids and alkalis</b> <b>Chemical reactions</b> <b>The periodic table</b> <b>Sound and light waves</b> <b>Energy transfer and conservation</b> <b>Motion and forces</b> <b>Electricity and magnetism</b> <b>Ecosystems and food webs</b> <b>Adaptation and inheritance</b> <b>Earth and space</b> <b>Health and lifestyle</b>";
    button.style.display =  "inline-block"
  } else if (option1 === "Science" && option2 === "KS4") {
    resultDiv.innerHTML = "<b>Chemistry :</b> <br> <p>Atomic structure and the periodic table</p>  <p>Bonding, structure, and properties of matter</p> <p>Quantitative chemistry</p> <p>Chemical changes</p> <p>Energy changes</p> <p>The rate and extent of chemical change</p> <p>Organic chemistry</p> <p>Energy changes</p> <p>Chemical analysis</p> <p>Chemistry of the atmosphere</p> <p>Using resources</p> <br> <b>Physics:</b> <br> <p>Energy</p> <p>Electricity</p>  <p>Particle model of matter</p>  <p>Atomic structure</p> <p>Forces</p> <p>Waves</p> <p>Magnetism and electromagnetism</p> <p>Space Physics</p> <p>Energy resources and energy transfer</p>  <br> <b>Biology:</b> <br> <p>Cell biology</p> <p>Organisation</p> <p>Infection and response</p> <p>Bioenergetics</p> <p>Homeostasis and response</p> <p>Genetics: Inheritance, variation and evolution</p> Ecology</p> ";    
    button.style.display =  "inline-block"
  }



  // Show or hide the result div based on whether a combination was selected
  resultDiv.style.display = resultDiv.innerHTML !== "" ? "block" : "none";
}


let redirected = false;
function redirectBasedOnLocation() {
  // Make a request to the Geolocation API
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const country = data.country_code;

      // Check if the visitor is from India (country code: IN)
      if (country === 'IN' && !redirected) {
        redirected = true;
        // Redirect to the India-specific page
        window.location.href = 'subjectsi.html';
        console.log("Hello")

      }
    })
    .catch(error => {
      
    });
}

window.onload = redirectBasedOnLocation;