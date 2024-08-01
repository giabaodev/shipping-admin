import Providers from '@/components/providers';
import { i18n, Locale } from '@/config/locale';
import { siteConfigs } from '@/config/site';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteConfigs.title,
  description: siteConfigs.description,
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>): Promise<JSX.Element> {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  unstable_setRequestLocale(params.lang);

  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Providers themeProps={{ attribute: 'class', defaultTheme: 'light' }}>
            <main className="h-screen w-screen">{children}</main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
