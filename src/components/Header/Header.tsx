import Link from 'next/link';
import Image from 'next/image';
import Nav from '../Nav/Nav';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles['header__logo']}>
        <Image
          className={styles['header__logo-img']}
          src="images/logo.svg"
          width="25"
          height="20"
          alt="logo of movie app"
        />
      </Link>

      <div className={styles['header__nav']}>
        <Nav />
      </div>

      <div className={styles['header__account']}>
        <Image
          className={styles['header__user-icon']}
          src="/images/icon__user.png"
          width="24"
          height="24"
          alt="image of user"
        />
      </div>
    </header>
  );
};

export default Header;
