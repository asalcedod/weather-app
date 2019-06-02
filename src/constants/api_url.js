const location = "Barranquilla,co";
const api_key = "85d7cbfb53bbae1e5629b23f0271f15a";
const url_base_weather = "https://api.openweathermap.org/data/2.5/weather";
export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;