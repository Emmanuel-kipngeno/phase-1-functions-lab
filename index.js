function distanceFromHeadquartersInBlocks(blocks) {
  return Math.abs(blocks - 42);
}

function distanceFromHeadquartersInFeet(blocks) {
  let feet = distanceFromHeadquartersInBlocks(blocks);
  return feet * 264;
}

function distanceTravelledInFeet(start, destination) {
  let feetTraveled = Math.abs(start - destination);
  return feetTraveled * 264;
}

function calculateFarePrice(start, destination) {
  let theTravelCost = distanceTravelledInFeet(start, destination);
  if (theTravelCost <= 400) {
    return 0;
  } else if (theTravelCost > 400 && theTravelCost <= 2000) {
    return (theTravelCost - 400) * 0.02;
  } else if (theTravelCost > 2000 && theTravelCost <= 2500) {
    return 25;
  } else {
    return "Can't travel that far.";
  }
}
