import React from 'react';
import {createIntl, createIntlCache} from 'react-intl';

import enUS from '../localization/en.json';

// This is optional but highly recommended to prevent memory leak.
const cache = createIntlCache();

const intl = createIntl(
  {
    locale: 'en',
    messages: enUS,
  },
  cache,
);

export default intl;

const boldText = (chunks) => <b>{chunks}</b>;
const underlineText = (chunks) => <u>{chunks}</u>;
const linkText = (chunks, href) => <a href={href}>{chunks}</a>;
const paragraph = (chunks) => <p>{chunks}</p>;
const lineBreak = () => <br />;
const strikeTrough = (chunks) => <s>{chunks}</s>;
const italicText = (chunks) => <i>{chunks}</i>;
const quoteText = (chunks) => <q>{chunks}</q>;

export const solvedHtmlMessage = (value = {}, href = '') => ({
  a: (...chunks) => linkText(chunks, href),
  u: underlineText,
  b: boldText,
  p: paragraph,
  br: lineBreak,
  s: strikeTrough,
  i: italicText,
  q: quoteText,
  ...value,
});

// For middleware usage.
export const formatMessage = (desc = {}, value = {}, href = '') => {
  const {formatMessage: formatMsg} = intl;
  return formatMsg(
    {...desc},
    {
      ...solvedHtmlMessage(value, href),
    },
  );
};
