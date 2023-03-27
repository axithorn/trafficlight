function updateTrafficLight() {
  ZOHO.CRM.API.getRecord({Entity:"Contacts",RecordID:ZOHO.CRM.ENTITY.getID()})
  .then(function(response){
    var TE_Score = response.data[0].TE_Score;
    var trafficLightElement = document.getElementById("traffic-light");

    if (trafficLightElement === null) {
      return;
    }

    if (TE_Score >= 0 && TE_Score <= 50) {
      trafficLightElement.style.backgroundColor = "red";
    } else if (TE_Score > 50 && TE_Score <= 75) {
      trafficLightElement.style.backgroundColor = "orange";
    } else if (TE_Score > 75) {
      trafficLightElement.style.backgroundColor = "green";
    } else {
      trafficLightElement.style.backgroundColor = "transparent";
    }
  });
}

window.onload = updateTrafficLight;
