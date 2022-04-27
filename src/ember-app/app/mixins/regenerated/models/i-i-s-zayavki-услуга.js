import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  стоимость: DS.attr('decimal'),
  заявка: DS.belongsTo('i-i-s-zayavki-заявка', { inverse: 'услуга', async: false })
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-zayavki-услуга.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  стоимость: {
    descriptionKey: 'models.i-i-s-zayavki-услуга.validations.стоимость.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  заявка: {
    descriptionKey: 'models.i-i-s-zayavki-услуга.validations.заявка.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УслугаE', 'i-i-s-zayavki-услуга', {
    название: attr('Название', { index: 0 }),
    стоимость: attr('Стоимость', { index: 1 })
  });
};
