import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { i18n, Locale } from './config/locale';

// Can be imported from a shared config
const locales = i18n.locales;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) notFound();

  return {
    messages: (await import(`@/translate/${locale}.json`)).default,
  };
});
