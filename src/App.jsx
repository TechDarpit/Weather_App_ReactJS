import { Fragment, useState } from 'react';

import Layout from './components/layout/Layout';
import WeatherForm from './components/weatherfrom/WeatherForm';
import WeatherList from './components/weatherList/WeatherList';

const DUMMY_WEATHER = [
  {
    id: 1,
    city: 'Rajkot',
    date: '2022-02-15T10:20',
    temp: 20.2,
    tempType: 'C',
    weatherType: 'Sunny',
  },
  {
    id: 2,
    city: 'Ahmedabad',
    date: '2022-08-20T15:20',
    temp: 20.2,
    tempType: 'F',
    weatherType: 'Cloudy',
  },
  {
    city: 'Surat',
    date: '2022-02-15T20:39',
    id: '2538e4dc',
    temp: '12',
    tempType: 'C',
    weatherType: 'Rainy',
  },
  {
    city: 'Gandhinagar',
    date: '2022-02-15T03:25',
    id: '950a7e60',
    temp: '123',
    tempType: 'F',
    weatherType: 'Snowy',
  },
];

const App = () => {
  const [weatherList, setWeatherList] = useState(DUMMY_WEATHER);

  const addWeatherHandler = (weatherData) => {
    setWeatherList((prevWetherData) => {
      return [...prevWetherData, weatherData];
    });
  };

  console.log(weatherList);

  return (
    <Fragment>
      <Layout>
        <WeatherForm onAddWeather={addWeatherHandler} />
        <WeatherList dummyData={weatherList} />
      </Layout>
    </Fragment>
  );
};

export default App;
