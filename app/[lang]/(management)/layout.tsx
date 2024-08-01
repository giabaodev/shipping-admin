import Sidebar from '@/components/sidebar';
import React from 'react';

const HomeLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex h-full">
      <Sidebar /> {children}
    </div>
  );
};

export default HomeLayout;
