import en_messages from './en'
import vi_messages from './vi'
import '@formatjs/intl-relativetimeformat/polyfill'
import '@formatjs/intl-relativetimeformat/dist/locale-data/en'
import '@formatjs/intl-relativetimeformat/dist/locale-data/vi'

const locales = [
  {
    locale: 'en',
    messages: en_messages,
  },

  {
    locale: 'vi',
    messages: vi_messages,
  }

]

export default locales
