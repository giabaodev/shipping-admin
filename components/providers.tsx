'use client';

import { NextUIProvider } from '@nextui-org/react';
import { ThemeProviderProps } from 'next-themes/dist/types';
import React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { useRouter } from 'next/navigation';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: Omit<ThemeProviderProps, 'children'>;
}

const Providers = ({ children, themeProps }: ProvidersProps) => {
  const route = useRouter();
  return (
    <NextUIProvider navigate={route.push}>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </NextUIProvider>
  );
};

export default Providers;
