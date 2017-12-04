// This Javascript was made by Jared and Connor
// Modified 11/18/17 by Bill

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


Router.route('/profile', function () {
  this.render('profile');
}, {
  name: 'profile'
});


Router.route('/match', function () {
  this.render('match');
}, {
  name: 'match'
});

Router.route('/matchmaking', function () {
  this.render('matchmaking');
}, {
  name: 'matchmaking'
});
