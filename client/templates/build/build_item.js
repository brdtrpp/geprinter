Template.buildItem.helpers({
  bgcolor: function() {
    var buildType = BuildType.findOne({build: this.build, rev: this.rev});
    if (buildType != undefined) {
      return buildType.color;
    } else {
      return "white";
    }
  },

  startTimeFormat: function() {
    if (this.startTime != undefined) {
      var start = moment(this.startTime).format("ddd, h:mmA");
      return start;
    }

  },
  endTimeFormat: function() {
    if (this.endTime != undefined) {
      var end = moment(this.endTime).format("ddd, h:mmA");
      return end;
    }
  },
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