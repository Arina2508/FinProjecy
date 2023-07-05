import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import { HOME_URL } from '../../constants';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../components/Logo/Logo';
import Footer from '../../components/Footer/Footer';

const Main = ({ children }) => {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.row}>
          <Link to={HOME_URL}>
            <Logo color="white" />
          </Link>

          <Footer />
        </div>
      </footer>
    </>
  );
};

export default Main;
