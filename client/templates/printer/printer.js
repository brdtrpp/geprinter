Template.printer.events({
  'click .machine': function() {
    Session.set('machine', this.machine);
  },
});

Template.printer.helpers({
  build: function () {
    var build = Builds.find({machine: this.machine}, {sort: {createdAt: -1}}).fetch();
    var array = [];
    array.push(build[0]);
    return array;
  }
});