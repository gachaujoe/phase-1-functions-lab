// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const hq = 42;
    return Math.abs(someValue - hq);
  }
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
  }
  function distanceTravelledInFeet(start, destination) {
    const blocksTraveled = Math.abs(destination - start);
    return blocksTraveled * 264;
  }
  function calculatesFarePrice(start, destination) {
    const feetTraveled = distanceTravelledInFeet(start, destination);
    
    if (feetTraveled <= 400) {
      return 0;
    } else if (feetTraveled > 400 && feetTraveled <= 2000) {
      return (feetTraveled - 400) * 0.02;
    } else if (feetTraveled > 2000 && feetTraveled < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }
  