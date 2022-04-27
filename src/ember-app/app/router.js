import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-zayavki-заявка-l');
  this.route('i-i-s-zayavki-заявка-e',
  { path: 'i-i-s-zayavki-заявка-e/:id' });
  this.route('i-i-s-zayavki-заявка-e.new',
  { path: 'i-i-s-zayavki-заявка-e/new' });
  this.route('i-i-s-zayavki-клиент-l');
  this.route('i-i-s-zayavki-клиент-e',
  { path: 'i-i-s-zayavki-клиент-e/:id' });
  this.route('i-i-s-zayavki-клиент-e.new',
  { path: 'i-i-s-zayavki-клиент-e/new' });
});

export default Router;
