// Write your JavaScript code here!
window.addEventListener("load", function() {
    // let form = document.getElementById("launchForm");
    let form = document.querySelector("form");
    // let pilotStatus=document.getElementById("pilotStatus");
    // let copilotStatus=document.getElementById("copilotStatus");
    // let fuelStatus=document.getElementById("fuelStatus");
    // let cargoStatus=document.getElementById("cargoStatus");
    // let faultyItems=document.getElementById("faultyItems");
    // let launchStatus=document.getElementById("launchStatus");
form.addEventListener("submit",function(event) {
        // alert("Submit Clicked");
        let pilotName=document.querySelector("input[name=pilotName]");
        let copilotName=document.querySelector("input[name=copilotName]");
        let fuelLevel=document.querySelector("input[name=fuelLevel]");
        let cargoMass=document.querySelector("input[name=cargoMass]");
        event.preventDefault();
        // formSubmission(launchStatus, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
        formSubmission(document, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, cargoMass.value)
        // formSubmission(document, faultyItems, pilotName.value, copilotName.value, 0, cargoMass.value)
        // formSubmission(document, faultyItems, pilotName.value, copilotName.value, fuelLevel.value, 0)
    })

    let listedPlanets;
    // let missionTarget=document.getElementById("missionTarget");

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
        // addDestinationInfo(missionTarget, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image)
    })
});