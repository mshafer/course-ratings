import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return [
      {
        name: "COMPSYS 201",
        rating: 1,
        comment: "Too much computers"
      },
      {
        name: "SOFTENG 251",
        rating: 5,
        comment: "Yea you're gonna need this stuff"
      }
    ];
  }
});
