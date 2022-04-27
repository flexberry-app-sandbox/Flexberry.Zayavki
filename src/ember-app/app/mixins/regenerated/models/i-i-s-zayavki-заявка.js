import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  клиент: DS.belongsTo('i-i-s-zayavki-клиент', { inverse: null, async: false }),
  услуга: DS.hasMany('i-i-s-zayavki-услуга', { inverse: 'заявка', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-zayavki-заявка.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-zayavki-заявка.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-zayavki-заявка.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаявкаE', 'i-i-s-zayavki-заявка', {
    дата: attr('Дата', { index: 0 }),
    клиент: belongsTo('i-i-s-zayavki-клиент', 'Клиент', {
      имя: attr('Имя', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'имя' }),
    услуга: hasMany('i-i-s-zayavki-услуга', 'Услуга', {
      название: attr('Название', { index: 0 }),
      стоимость: attr('Стоимость', { index: 1 })
    })
  });

  modelClass.defineProjection('ЗаявкаL', 'i-i-s-zayavki-заявка', {
    дата: attr('Дата', { index: 0 }),
    клиент: belongsTo('i-i-s-zayavki-клиент', 'Имя', {
      имя: attr('Имя', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
