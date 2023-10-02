function scuberGreetingForFeet(rideLength){
  if (rideLength <= 400) {
    return "This one is on me!"
    }

    else if (rideLength >= 2500) {
      return "No can do."
    }

    else return "I will gladly take your thirty bucks."

}

function ternaryCheckCity(cityName){
  let toGo;
  (cityName == "NYC")? (toGo = "Ok, sounds good.") : (toGo = "No go.")
  return toGo;
}

function switchOnCharmFromTip(tipSize){
  switch (tipSize) {
    case "generous":
      return "Thank you so much.";
      break;
    case "not as generous":
      return "Thank you.";
        break;
    default:
      return "Bye.";

  }

}