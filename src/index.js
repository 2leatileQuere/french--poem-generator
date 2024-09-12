alert("generating Poem");

function generatePoem(event) {
  event.preventDefault();
  alert("Generating Poem");

  new Typewriter("#Poem", {
    strings: ["What is stronger than the human heart"],
    autoStart: true,
    delay:1
    cursor:"",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
