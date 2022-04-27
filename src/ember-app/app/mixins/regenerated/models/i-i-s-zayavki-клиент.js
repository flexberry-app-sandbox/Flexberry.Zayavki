import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  имя: DS.attr('string'),
  телефон: DS.attr('string'),
  email: DS.attr('string')
});

export let ValidationRules = {
  имя: {
    descriptionKey: 'models.i-i-s-zayavki-клиент.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  телефон: {
    descriptionKey: 'models.i-i-s-zayavki-клиент.validations.телефон.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  email: {
    descriptionKey: 'models.i-i-s-zayavki-клиент.validations.email.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлиентE', 'i-i-s-zayavki-клиент', {
    имя: attr('Имя', { index: 0 }),
    email: attr('Email', { index: 1 }),
    телефон: attr('Телефон', { index: 2 })
  });

  modelClass.defineProjection('КлиентL', 'i-i-s-zayavki-клиент', {
    имя: attr('Имя', { index: 0 }),
    email: attr('Email', { index: 1 }),
    телефон: attr('Телефон', { index: 2 })
  });
};
