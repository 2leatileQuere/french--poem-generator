function displayPoem(response){
  console.log("poem generated");
   new Typewriter("#Poem", {
    strings: response.data.answer,
    autoStart: true,
    delay:1
    cursor:"",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput=document.querySelector("user-instructions");
  let apiKey="b8af296a5456bat0c2aff0ffb9o2bae3";
  let context=
  "You are a genious Poem expert and love to write short nice poems.Your mission is to generate a 4  line poem in basic Html and separate each line with a <br/>. Make sure to follow  the users instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI'inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt= `User instructions: Generate a English poem about ${instructionsInput.value}`;
  let apiURL= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context={context}&key=${apikey}`;

  console.log("Generating Poem");
  console.log(`Prompt:${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);

  
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
