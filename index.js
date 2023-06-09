// const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}

// nextISSTimesForMyLocation((error, passTimes) => {
//   if (error) {
//     return console.log("It didn't work!", error);
//   }
//   // success, print out the deets!
//   console.log(printPassTimes(passTimes));
// });

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }

//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP('162.157.71.135', (error, coordinates) => {
//   if (error) {
//     console.log('It did not work!', error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coordinates);
// });

// const exampleCoords = { latitude: '49.27670', longitude: '-123.13000' }

// fetchISSFlyOverTimes(exampleCoords, (error, flyOvers) => {
//     if (error) {
//       console.log('It did not work!', error);
//       return;
//     }
//     console.log('It worked! Returned flyover times:', flyOvers);
//   });

module.exports = { printPassTimes };