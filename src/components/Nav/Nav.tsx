import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import styles from './Nav.module.scss';

import { navLinks } from './NavLinks';

const Nav = () => {
  const { route } = useRouter();

  return (
    <nav className={styles.nav}>
      <ul className={styles['nav__list']}>
        {navLinks.map((navLink) => (
          <li className={styles['nav__item']} key={navLink.href}>
            <Link
              href={navLink.href}
              className={cn(styles['nav__link'], {
                [styles['nav__link--active']]: route === navLink.href,
              })}
            >
              {navLink.img}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
