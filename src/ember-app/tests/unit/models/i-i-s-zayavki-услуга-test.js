import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-zayavki-услуга', 'Unit | Model | i-i-s-zayavki-услуга', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-zayavki-заявка',
    'model:i-i-s-zayavki-клиент',
    'model:i-i-s-zayavki-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
