// const request = require('request');

// const fetchMyIP = function(callback) {
//   const URL = "https://api.ipify.org?format=json";

//   request(URL, (error, response, body) => {
//     if (error) {
//       return callback(error, null);
//     }

//     if (response.statusCode !== 200) {
//       const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
//       callback(Error(msg), null);
//       return;
//     }

//     const ipAddress = JSON.parse(body).ip;
//     callback(null, ipAddress);

//   });
// };

// const fetchCoordsByIP = function(ip, callback) {
//   const URL = "http://ipwho.is/162.157.71.135";

//   request(URL, (error, response, body) => {
//     if (error) {
//       return callback(error, null);
//     }

//     const parsedBody = JSON.parse(body);

//     if (!parsedBody.success) {
//       const message = `Success status was ${parsedBody.success}. Server message says: ${parsedBody.message} when fetching for IP ${parsedBody.ip}`;
//       callback(Error(message), null);
//       return;
//     }

//     const { latitude, longitude } = parsedBody;

//     callback(null, { latitude, longitude });
//   });
// };

// const fetchISSFlyOverTimes = function(coords, callback) {
//   const URL = `https://iss-flyover.herokuapp.com/json/?lat=${coords.latitude}&lon=${coords.longitude}`;

//   request(URL, (error, response, body) => {
//     if (error) {
//       return callback(error, null);
//     }

//     if (response.statusCode !== 200) {
//       callback(Error(`Status Code ${response.statusCode} when fetching ISS pass times: ${body}`), null);
//       return;
//     }

//     const flyOverTimes = JSON.parse(body).response;
//     callback(null, flyOverTimes);
//   });

// };

// const nextISSTimesForMyLocation = function(callback) {
//   fetchMyIP((error, ip) => {
//     if (error) {
//       return callback(error, null);
//     }

//     fetchCoordsByIP(ip, (error, coordinates) => {
//       if (error) {
//         return callback(error, null);
//       }
//       fetchISSFlyOverTimes(coordinates, (error, flyOvers) => {
//         if (error) {
//           return callback(error, null);
//         }

//         callback(null, flyOvers);
//       });
//     });
//   });
// };


// module.exports = { nextISSTimesForMyLocation };