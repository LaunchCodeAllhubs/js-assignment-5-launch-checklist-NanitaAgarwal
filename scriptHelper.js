// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
  document.innerHTML=`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}"></img>`
}

function validateInput(testInput) {
   if (!testInput){
    return "Empty";
   } else if(isNaN(testInput)){
    return "Not a Number";
   } else {
    return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    list.style.visibility="visible";
     pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`;  
     copilotStatus.innerHTML=`Copilot ${copilot} is ready for launch`;
     document.innerHTML=`Shuttle Ready For Launch`;
     document.style.color="#419F6A";
     if (fuelLevel<10000){
        fuelStatus.innerHTML=`Fuel level too low for launch`;
        document.innerHTML=`Shuttle not ready for launch`;
        document.style.color="red";
     }
     else{
     fuelStatus.innerHTML=`Fuel level high enough for launch`
     }

     if (cargoLevel>10000){
        cargoStatus.innerHTML=`Cargo mass too heavy for launch`;
        document.innerHTML=`Shuttle not ready for launch`;
        document.style.color="rgb(199, 37, 78)";
     }
     else{
     cargoStatus.innerHTML=`Cargo mass low enough for launch`;
     }
    //  if(cargoLevel)

   
}

async function myFetch() {
    let planetsReturned;

    await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        planetsReturned = response.json();
    });
    // console.log(`planetsReturned: ${planetsReturned}`);

    return planetsReturned;
}

function pickPlanet(planets) {
    let i = Math.floor(Math.random()*planets.length);
    return planets[i];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
