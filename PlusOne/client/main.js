import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

// if (Meteor.isClient) {
// 	Accounts.onLogin(function() {
// 	  this.render('matchmaking');
// 	});

// 	Accounts.onLogout(function() {
// 	  this.render('Home');
// 	});
// }

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

Router.route('/matchmaking', function () {
  this.render('matchmaking');
}, {
  name: 'matchmaking'
});


Router.route('/match', function () {
  this.render('match');
}, {
  name: 'match'
});  
