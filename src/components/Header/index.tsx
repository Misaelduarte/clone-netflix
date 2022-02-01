import React from 'react';

import styles from './Header.module.scss';

interface HeaderProps {
  black: boolean;
}

const Header = ({ black }: HeaderProps) => {
  return (
    <header className={`${styles.header} ${black ? styles.black : ''}`}>
      <div className={styles.headerLogo}>
        <a href="">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix" />
        </a>
      </div>
      <div className={styles.headerUser}>
         <img src="https://i.pinimg.com/originals/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.png" alt="Usuário" />
      </div>
    </header>
  )
}

export default Header;