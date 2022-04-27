import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.обработка-заявок.caption'),
          title: i18n.t('forms.application.sitemap.обработка-заявок.title'),
          children: [{
            link: 'i-i-s-zayavki-клиент-l',
            caption: i18n.t('forms.application.sitemap.обработка-заявок.i-i-s-zayavki-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.обработка-заявок.i-i-s-zayavki-клиент-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-zayavki-заявка-l',
            caption: i18n.t('forms.application.sitemap.обработка-заявок.i-i-s-zayavki-заявка-l.caption'),
            title: i18n.t('forms.application.sitemap.обработка-заявок.i-i-s-zayavki-заявка-l.title'),
            icon: 'folder',
            children: null
          }]
        }
      ]
    };
  }),
})