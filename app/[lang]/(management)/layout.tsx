import React, { Fragment } from 'react';
import styles from './styles.module.css';
import Sidebar from '@/components/sidebar';

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Fragment>
      <section className={styles.customSection}>
        <Sidebar />
        <div className={styles.contentPage}>{children}</div>
      </section>
    </Fragment>
  );
};

export default HomeLayout;
