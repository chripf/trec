TestResults = new Mongo.Collection("testresults");

if (Meteor.isClient) {
  // counter starts at 0

  Template.body.helpers({
    testresults: function(){
        return TestResults.find({});
    }
  });

  Template.body.events({
    "submit .new-testresult": function (event) {
      // Prevent default browser form submit
      event.preventDefault();
 
      // Get value from form element
      var name = event.target.name.value;
      var result = event.target.result.checked;
 
      // Insert a task into the collection
      TestResults.insert({
        name: name,
        result: result,
        time: new Date() // current time
      });
 
      // Clear form
      event.target.name.value = "";
      event.target.result.checked = false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
