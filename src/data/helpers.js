export const getEachDayForFiveDaysForecast = (forecastData) => { 
  const result = [];
  let index = 0;

  for (let i = 0; i < forecastData.length; i+=8) {
    const date = new Date(forecastData[i+1].dt_txt);
    result.push({
      date,
      icon: forecastData[i].weather[0].icon,
      temp: forecastData[i].main.temp,
      nightTemp: getVariousResult.getNightTemp(forecastData)[index] ? getVariousResult.getNightTemp(forecastData)[index].temp : null,
    });
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
          temp: dayForecast.main.temp
        })
      );
    });
    console.log(result)
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
      // Because time goes on and sometimes there will only be 2 temperatures available form the api,
      // eg.) date: 2022-01-23 21:00's data would be collected from the axios call but on the last day's 
      //      2022-01-28 21:00's data may be missing hence there will only be 00 and 03's information.

      // using if condition, make sure the for loop runs and checks for the conditions.
      if (nightTimeResult[i] && nightTimeResult[i+1] && nightTimeResult[i+2]) {
        result.push({
          temp: ((nightTimeResult[i].temp + nightTimeResult[i + 1].temp + nightTimeResult[i + 2].temp) / 3 ).toFixed(2)
        });
      } else if (nightTimeResult[i] && nightTimeResult[i+1]) {
        result.push({
          temp: ((nightTimeResult[i].temp + nightTimeResult[i + 1].temp) / 3 ).toFixed(2)
        });
      }      
    }
      
    return result;
  },
}

export default getEachDayForFiveDaysForecast;