const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes, nextISSTimesForMyLocation} = require('./iss');


/*
fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP("76.66.102.108", (error, data) => {
  if (error) {
    console.log(error);
  } else if (data["success"] === false) {
    console.log(data["message"]);
  } else {
    console.log({
      latitude: data.latitude,
      longitude: data.longitude
    });
  }

});

fetchISSFlyOverTimes({ latitude: 43.653226, longitude: -79.3831843 }, (error, passTimes) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  
  console.log('It worked! Returned flyover times: ', passTimes.response);
});
*/

const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  } else {
    printPassTimes(passTimes);
    }
});