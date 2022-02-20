import styles from './WeatherItem.module.css';

const WeatherItem = (props) => {
  const humanReadableDate = new Date(props.date).toLocaleString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });

  const hour = new Date(props.date).getHours();

  let WeatherClass = `${styles.item} `;

  if (hour >= 0 && hour < 6) {
    WeatherClass = `${styles.item} ${styles.night}`;
  } else if (hour >= 6 && hour < 12) {
    WeatherClass = `${styles.item} ${styles.morning}`;
  } else if (hour >= 12 && hour < 18) {
    WeatherClass = `${styles.item} ${styles.afternoon}`;
  } else {
    WeatherClass = `${styles.item} ${styles.evening}`;
  }

  return (
    <li className={WeatherClass}>
      <div>
        <div>
          <h1>
            {props.temp}° <small>{props.tempType}</small>
          </h1>
          <h2>
            {props.city} : {props.weatherType}
          </h2>
          <h3>{humanReadableDate}</h3>
        </div>
        <div className={styles.icon}>
          <img
            src={require(`../../Images/${props.weatherType}.png`)}
            alt={`${props.weatherType} Weather Icon`}
          />
        </div>
      </div>
    </li>
  );
};

export default WeatherItem;
