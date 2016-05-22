import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup

  if (Machines.find().count() == 0) {
    for( i = 301; i < 382; i++){
      Machines.insert({machine: i});
    }
  }

  // if (Builds.find().count() == 0) {
  //   for ( i = 1; i < 80; i++) {
  //     Builds.insert({machine: 300 + i, build: "9X" + i, buildTime: Date()});
  //   }
  // }
});
