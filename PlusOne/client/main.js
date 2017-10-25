import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './main.css';
import './creative.js';
import './vendor/jquery/jquery.min.js';
import './vendor/bootstrap/js/bootstrap.bundle.min.js';
import './vendor/jquery-easing/jquery.easing.min.js';
import './vendor/scrollreveal/scrollreveal.min.js';
import './vendor/magnific-popup/jquery.magnific-popup.min.js';
import './vendor/bootstrap/js/bootstrap.bundle.min.js';
import './vendor/bootstrap/js/bootstrap.bundle.min.js';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
