const positionLat = 2;
const positionLong = 4;

const addressLat = 10;
const addressLong = 12;

const distanceA = addressLat - positionLat;
const distanceB = addressLong - positionLong;

const distanceC = ((distanceA ** 2) + (distanceB ** 2)) ** (1/2);

console.log('Result: ', distanceC);