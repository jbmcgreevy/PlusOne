import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Router.route('/home', function () {
  this.render('Home');
}, {
  name: 'home'
});

Router.route('/signin', function () {
  this.render('signIn');
}, {
  name: 'signIn'
});