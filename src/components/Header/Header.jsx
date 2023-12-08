import styles from "./Header.module.css";
import instagramLogo from "../../assets/logo-instagram.svg.svg";
import githubLogo from "../../assets/logo-github.svg";
import telegramLogo from "../../assets/logo-telegram.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>To-Do List</h1>
        <ul className={styles.socialMedia}>
          <li>
            <a
              className={styles.link}
              href="https://www.instagram.com/okisabela_/"
              target="blank"
            >
              <img src={instagramLogo} alt="Logo Instagram" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://github.com/isabela-pr" target="blank">
              <img src={githubLogo} alt="Logo GitHub" />
            </a>
          </li>
          <li>
            <a className={styles.link} href="https://t.me" target="blank">
              <img src={telegramLogo} alt="Logo Telegram" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
