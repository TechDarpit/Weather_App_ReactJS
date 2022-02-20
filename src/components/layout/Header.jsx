import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Weather App</div>
    </header>
  );
};

export default Header;
