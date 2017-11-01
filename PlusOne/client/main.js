import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './main.css';
// import './creative.js';


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