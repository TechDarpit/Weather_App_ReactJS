import styles from './Card.module.css';

const Card = (props) => {
  const cardClasses = `${props.className} ${styles.card}`;
  return <div className={cardClasses}>{props.children}</div>;
};

export default Card;
