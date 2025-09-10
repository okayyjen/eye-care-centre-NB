// src/i18n/request.ts
import enMessages from '../../messages/en.json';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(() => ({
  locale: 'en',
  messages: enMessages
}));
