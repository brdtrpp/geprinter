Template.buildItem.helpers({
  bgcolor: function() {
    var buildType = BuildType.findOne({build: this.build, rev: this.rev});
    console.log(buildType);
  }
});

Template.buildItem.events({
  'click .start' : function() {
    if (this.startTime == undefined) {
      Builds.update({_id: this._id}, {$set: {startTime: Date()}});
    } else {
      console.log("ERROR");
    }

  },

  'click .stop': function() {
    if (this.endTime == undefined) {
      Builds.update({_id: this._id}, {$set: {endTime: Date()}});
    } else {
      console.log("ERROR");
    }
  },

  'click .mid': function() {
  }
});