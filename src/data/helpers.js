export const getEachDayForFiveDaysForecast = (forecastData) => { 
  const result = [];
  // separate index for daily result of each temperatures and humidity for 5 days.
  let index = 0;

  for (let i = 0; i < forecastData.length; i+=8) {
    const date = new Date(forecastData[i+1].dt_txt);
    result.push({
      date,
      icon: forecastData[i].weather[0].icon,
      temp: Math.round(forecastData[i].main.temp),
      morningTemp: getVariousResult.getMorningTemp(forecastData)[index] ? Math.round(parseInt(getVariousResult.getMorningTemp(forecastData)[index].temp)) : null,
      dayTemp: getVariousResult.getDayTemp(forecastData)[index] ? Math.round(parseInt(getVariousResult.getDayTemp(forecastData)[index].temp)) : null,
      nightTemp: getVariousResult.getNightTemp(forecastData)[index] ? Math.round(parseInt(getVariousResult.getNightTemp(forecastData)[index].temp)) : null,
      humidity: getVariousResult.getHumidity(forecastData)[index] ? Math.round(parseInt(getVariousResult.getHumidity(forecastData)[index].humidity)) : null,
    });
    // increment the separate index since day has passed after every loop.
    index++;
  };
  return result;
};

// Object with various functions that are responsible for retrieving data from the api and calculating into required fields.
const getVariousResult = {
  // Function that returns required data in the assignment from the OpenWeatherMap api .
  getEachDay: (data) => {
    const result = [];
    
    data.map((dayForecast) => {
      const date = new Date(dayForecast.dt_txt);
      return (
        result.push({
          date,
          hour: date.toString().split(" ")[4].split(":")[0],
          temp: dayForecast.main.temp,
          humidity: dayForecast.main.humidity
        })
      );
    });
    return result;
  },

  // Function which is responsible for returning night time temperatures
  getNightTemp: (data) => {
    // Night time is considered as 00:00, 03:00 and 21:00
    const nightHours = ["00", "03", "21"];
    // Filter the daily result into night hours only
    const nightTimeResult = getVariousResult.getEachDay(data).filter(({hour}) => nightHours.includes(hour));
  
    const result = [];
    
    for (let i = 0; i < nightTimeResult.length; i+= 3) {
      // Run for loop skipping every 2nd and 3rd data in a day because there's only 3 night time slots per day and they will be calculated.
      // Using an if statement, make sure the index is still within the size of an array.
      if (nightTimeResult[i]) {
        result.push({
          temp: ((nightTimeResult[i].temp + nightTimeResult[i + 1].temp + nightTimeResult[i + 2].temp) / 3 )
        });
      } 
    }
      
    return result;
  },
  
  // Function that returns morning temperature of the day
  getMorningTemp: (data) => {
    // Morning hours are considered as 06:00 and 09:00
    const morningHours = ["06", "09"];
    const morningTimeResult = getVariousResult.getEachDay(data).filter(({hour}) => morningHours.includes(hour));
  
    const result = [];
    
    for (let i = 0; i < morningTimeResult.length; i+= 2) {
      if (morningTimeResult[i]) {
        result.push({
          temp: ((morningTimeResult[i].temp + morningTimeResult[i + 1].temp) / 2 )
        });
      } 
    }
      
    return result;
  },

  // Function that returns day time temperature of the day
  getDayTemp: (data) => {
    // Day time hours are considered as 12:00, 15:00 and 18:00
    const dayHours = ["12", "15", "18"];
    const dayTimeResult = getVariousResult.getEachDay(data).filter(({hour}) => dayHours.includes(hour));
  
    const result = [];
    
    for (let i = 0; i < dayTimeResult.length; i+= 3) {
      if (dayTimeResult[i]) {
        result.push({
          temp: ((dayTimeResult[i].temp + dayTimeResult[i + 1].temp + dayTimeResult[i + 2].temp) / 3 )
        });
      } 
    }
      
    return result;
  },

  // Function that calculates mean humidity per day.
  getHumidity: (data) => {
    const fiveDaysResult = getVariousResult.getEachDay(data);
    const result = [];
    
    // For loop is running per day since there are data showing every 3 hours hence that would be 8 times per day.
    for (let i = 0; i < fiveDaysResult.length; i +=8) {
      if (fiveDaysResult[i]) {
        result.push({
          humidity: (
            (fiveDaysResult[i].humidity + fiveDaysResult[i + 1].humidity + fiveDaysResult[i + 2].humidity + fiveDaysResult[i + 3].humidity + 
              fiveDaysResult[i + 4].humidity + fiveDaysResult[i + 5].humidity + fiveDaysResult[i + 6].humidity + fiveDaysResult[i + 7].humidity) / 8)
        })
      }
    }
    return result;
  },

}

export default getEachDayForFiveDaysForecast;