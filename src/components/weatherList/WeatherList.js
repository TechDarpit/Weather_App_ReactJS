import { Fragment } from 'react';
import classes from './WeatherList.module.css';
import WeatherItem from './WeatherItem';

const WeatherList = (props) => {
  const weathers = props.dummyData;

  return (
    <Fragment>
      <ul className={classes.list}>
        {weathers.map((weather) => (
          <WeatherItem
            key={weather.id}
            id={weather.id}
            city={weather.city}
            temp={weather.temp}
            tempType={weather.tempType}
            weatherType={weather.weatherType}
            date={weather.date}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default WeatherList;
