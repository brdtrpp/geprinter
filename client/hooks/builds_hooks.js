AutoForm.hooks({
  insertBuildsForm: {
    before: {
      insert: function(doc) {
        var machine = Session.get('machine');
        doc.machine = machine;
        $('#loadBuild').modal('hide');
        return doc;
      }
    },
    beginSubmit: function() {},
    endSubmit: function() {}
  }
});