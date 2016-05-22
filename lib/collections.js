Machines = new Mongo.Collection('machines');
Builds = new Mongo.Collection('builds');
BuildType = new Mongo.Collection('buildType');

Schemas = {};

Schemas.Type = new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    autoform: {
      omit: true,
    }
  },

  build: {
    type: String,
  },

  rev: {
    type: Number,
  },

  duration: {
    type: Number,
    label:"Build Length in Hours"
  },

  color: {
    type: String,
    label: "Router Color",
    autoform: {
      type: "bootstrap-minicolors"
    }
  }
});

Schemas.Builds = new SimpleSchema({
  createdAt: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },
    autoform: {
      omit: true,
    }
  },

  machine: {
    type: Number,
  },

  build: {
    type: String,
    autoform: {
      options: function() {
        var buildArray = [];
        var type = BuildType.find().fetch();
        _.forEach(type, function(item){
          if (_.findWhere(buildArray, {label: item.build}) === undefined) {
            buildArray.push({label: item.build, value: item.build});
          }
        });
        return buildArray;
      }
    }
  },

  rev: {
    type: Number,
    unique: true,
    autoform: {
      type: "select",
      options: function () {
        if (Meteor.isClient) {
          var build = AutoForm.getFieldValue('build');
          var type = BuildType.find({build: build}).fetch();
          var options = [];
          _.map(type, function(item){
            if (_.findWhere(options, {label: item.rev, value: item.rev}) === undefined) {
              options.push({label: item.rev, value: item.rev});
            }
          });
          return options;
        }
      }
    }
  },

  duration: {
    type: Number,
  },

  startTime: {
    type: Date,
    optional: true,
  },

  endTime: {
    type: Date,
    optional: true,
  },

  downTime: {
    type: String,
    optional: true,
  },

  selected: {
    type: String,
    optional: true
  }
});

Builds.attachSchema(Schemas.Builds);
BuildType.attachSchema(Schemas.Type);