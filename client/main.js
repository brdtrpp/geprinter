import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.body.helpers({
  printers: function () {
    return Machines.find().fetch();
  },
});