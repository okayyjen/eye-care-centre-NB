import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

type Locale = (typeof routing.locales)[number];

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale;

  const resolvedLocale: Locale =
    routing.locales.includes(locale as Locale)
      ? (locale as Locale)
      : routing.defaultLocale;

  return {
    locale: resolvedLocale,
    messages: (await import(`../../messages/${resolvedLocale}.json`)).default
  };
});

