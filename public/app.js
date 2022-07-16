const cityForm = document.querySelector('form');
const details = document.querySelector('.details');
const icon = document.querySelector('.icon img');


//updatethe UI from data we get from the api
const updateUi = (data) => {

    //Normal way savingg data.cityDets and data.weather in variable so we dont call them everytime
    
    // const cityDets = data.cityDets;
    // const weather = data.weather;
    //const date = new Date(weather.LocalObservationDateTime).toUTCString();

    //Destructing object
    const { cityDets, weather} = data;
    const date = new Date(weather.LocalObservationDateTime).toUTCString();

    //updating the UI template
    details.innerHTML = `
        <div class="text-xl font-bold city">${cityDets.EnglishName}</div>
        <div class="text-sm text-gray-500 date">${date}</div>
        <div
          class="inline-flex items-center self-center justify-center w-24 h-24 mt-6 text-6xl text-indigo-400 rounded-lg"
        >
        <div class="icon"><img src="./icons/${weather.WeatherIcon}.svg" /></div>
      </div>
        <div class="flex flex-row items-center justify-center mt-6">
          <div class="text-6xl font-medium temp">${weather.Temperature.Metric.Value}ºC</div>
          <div class="flex flex-col items-center ml-6">
            <div class="weather-stat">${weather.WeatherText}</div>
          </div>
        </div>
    `;


    // //remove the hidden classe if present data
    if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
    }
};


cityForm.addEventListener('submit', e => {
    e.preventDefault();

    //get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();    
    updateCity(city)
    .then(data => updateUi(data))
    // .then(data => console.log(data))
    .catch(err => console.log(err));

});

//getting the city from the user and passing it as parametter to api call
const updateCity = async (city) => {
    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);
   
    //object short hand notating when the property name is the same as the value name
    return { cityDets, weather };

    //object normal declaration
    // return {
    //     cityDets : cityDets,
    //     weather : weather
    // };
};