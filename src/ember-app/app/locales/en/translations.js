import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISZayavkiЗаявкаLForm from './forms/i-i-s-zayavki-заявка-l';
import IISZayavkiКлиентLForm from './forms/i-i-s-zayavki-клиент-l';
import IISZayavkiЗаявкаEForm from './forms/i-i-s-zayavki-заявка-e';
import IISZayavkiКлиентEForm from './forms/i-i-s-zayavki-клиент-e';
import IISZayavkiЗаявкаModel from './models/i-i-s-zayavki-заявка';
import IISZayavkiКлиентModel from './models/i-i-s-zayavki-клиент';
import IISZayavkiУслугаModel from './models/i-i-s-zayavki-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-zayavki-заявка': IISZayavkiЗаявкаModel,
    'i-i-s-zayavki-клиент': IISZayavkiКлиентModel,
    'i-i-s-zayavki-услуга': IISZayavkiУслугаModel
  },

  'application-name': 'Zayavki',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Zayavki',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Zayavki',
          title: 'Zayavki'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'обработка-заявок': {
          caption: 'Обработка заявок',
          title: 'Обработка заявок',
          'i-i-s-zayavki-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-zayavki-заявка-l': {
            caption: 'Заявка',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-zayavki-заявка-l': IISZayavkiЗаявкаLForm,
    'i-i-s-zayavki-клиент-l': IISZayavkiКлиентLForm,
    'i-i-s-zayavki-заявка-e': IISZayavkiЗаявкаEForm,
    'i-i-s-zayavki-клиент-e': IISZayavkiКлиентEForm
  },

});

export default translations;
