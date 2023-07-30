// const { myFetch } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// Write your JavaScript code here!
window.addEventListener("load", function() {
    let form = document.querySelector("form");
    // let form = document.getElementById("launchForm");
    form.addEventListener("submit",function(event){
        // alert("Submit Clicked");
        let pilotName=document.querySelector("input[name=pilotName]");
        let copilotName=document.querySelector("input[name=copilotName]");
        let fuelLevel=document.querySelector("input[name=fuelLevel]");
        let cargoMass=document.querySelector("input[name=cargoMass]");
        let pilotStatus=document.getElementById("pilotStatus");
        let copilotStatus=document.getElementById("copilotStatus");
        let fuelStatus=document.getElementById("fuelStatus");
        let cargoStatus=document.getElementById("cargoStatus");
        let faultyItems=document.getElementById("faultyItems");
        let launchStatus=document.getElementById("launchStatus");
        event.preventDefault();
        if(!pilotName.value||!copilotName.value||!fuelLevel.value||!cargoMass.value){
            alert("All fields are required!");
        } else {
            if (validateInput(pilotName.value) !== "Not a Number"){
                alert("Make sure to enter valid information for each field!")
            }
            if (validateInput(copilotName.value) !== "Not a Number"){
                alert("Make sure to enter valid information for each field!")
            }
            if (validateInput(fuelLevel.value) !== "Is a Number"){
                fuelStatus.innerHTML="Fuel level high enough for launch"
                alert("Make sure to enter valid information for each field!")
            }
            if (validateInput(cargoMass.value) !== "Is a Number"){
                cargoStatus.innerHTML="Cargo mass too heavy for launch"
                alert("Make sure to enter valid information for each field!")
            }
            
        }
        formSubmission(launchStatus, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
    });
   let listedPlanets;
   let missionTarget=document.getElementById("missionTarget");

   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectedPlanet= pickPlanet(listedPlanets);
        console.log(selectedPlanet);
        addDestinationInfo(missionTarget,selectedPlanet.name,selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
    
    })
   
});