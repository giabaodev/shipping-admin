import Providers from '@/components/providers';
import { siteConfigs } from '@/config/site';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfigs.title,
  description: siteConfigs.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
          <main className="h-screen w-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
