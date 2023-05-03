import React, { ReactElement } from 'react';
import styles from './Page.module.scss';

import Header from '../Header/Header';

interface Props {
  children: ReactElement;
}

const Page: React.FC<Props> = ({ children }) => {
  return (
    <div className={styles.page}>
      <Header />
      <main className="page__main">{children}</main>
    </div>
  );
};

export default Page;
