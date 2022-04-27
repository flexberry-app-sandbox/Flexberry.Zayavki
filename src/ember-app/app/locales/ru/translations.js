import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Заявки',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Заявки',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Заявки',
          title: 'Zayavki'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-zayavki-заявка-l': IISZayavkiЗаявкаLForm,
    'i-i-s-zayavki-клиент-l': IISZayavkiКлиентLForm,
    'i-i-s-zayavki-заявка-e': IISZayavkiЗаявкаEForm,
    'i-i-s-zayavki-клиент-e': IISZayavkiКлиентEForm
  },

});

export default translations;
