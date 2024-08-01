import React from 'react';

const LoginLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-auth h-full flex items-center justify-center flex-col">
      {children}
    </div>
  );
};

export default LoginLayout;
