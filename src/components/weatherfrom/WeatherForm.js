import { Fragment, useRef } from 'react';

import Card from '../UI/Card';
import classes from './WeatherForm.module.css';

import { v4 as uuid } from 'uuid';
import Button from '../UI/Button';

const WeatherForm = (props) => {
  const cityInputRef = useRef();
  const datetimeInputRef = useRef();
  const tempInputRef = useRef();
  const tempTypeInputRef = useRef();
  const weatherTypeInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredCity = cityInputRef.current.value;
    const enteredDatetime = datetimeInputRef.current.value;
    const enteredTemp = tempInputRef.current.value;
    const selectedTempType = tempTypeInputRef.current.value;
    const selectedWeatherType = weatherTypeInputRef.current.value;

    if (
      !enteredCity ||
      enteredCity.trim() === 0 ||
      !enteredDatetime ||
      !enteredTemp
    ) {
      alert('Please enter a valid Inputs (non-empty values)');
      return;
    }

    const uniqueId = uuid().slice(0, 8);

    const weatherInput = {
      id: uniqueId,
      city: enteredCity,
      date: enteredDatetime,
      temp: enteredTemp,
      tempType: selectedTempType,
      weatherType: selectedWeatherType,
    };

    props.onAddWeather(weatherInput);

    cityInputRef.current.value = '';
    tempInputRef.current.value = '';
    datetimeInputRef.current.value = null;
    tempTypeInputRef.current.value = 'C';
    weatherTypeInputRef.current.value = 'Sunny';
  };

  return (
    <Fragment>
      <Card className={classes.formStyle}>
        <form className={classes.form} onSubmit={submitFormHandler}>
          <div className={classes.control}>
            <label htmlFor='city'>City</label>
            <input type='text' id='city' ref={cityInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='datetime'>Date and Time</label>
            <input type='datetime-local' id='datetime' ref={datetimeInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor='temp'>Temperature</label>
            <input type='number' id='temp' ref={tempInputRef} step='0.01' />
          </div>
          <div className={classes.control}>
            <label htmlFor='tempType'>Temperature Type</label>
            <select name='tempType' id='tempType' ref={tempTypeInputRef}>
              <option value='C'>Celsius</option>
              <option value='F'>Fahrenheit</option>
            </select>
          </div>
          <div className={classes.control}>
            <label htmlFor='weatherType'>Weather Type</label>
            <select
              name='weatherType'
              id='weatherType'
              ref={weatherTypeInputRef}
            >
              <option value='Sunny'>Sunny</option>
              <option value='Cloudy'>Cloudy</option>
              <option value='Snowy'>Snowy</option>
              <option value='Rainy'>Rainy</option>
            </select>
          </div>
          <div className={classes.actions}>
            <Button type='submit'>Add Weather</Button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default WeatherForm;
