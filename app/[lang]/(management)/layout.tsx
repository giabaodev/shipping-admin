import Sidebar from '@/components/sidebar';
import React, { Fragment } from 'react';
import styles from './styles.module.css';

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Fragment>
      <section className={styles.customSection}>
        <Sidebar />
        <div className="h-full overflow-auto">{children}</div>
      </section>
    </Fragment>
  );
};

export default HomeLayout;
