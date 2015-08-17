import Ember from 'ember';

export default Ember.Controller.extend({
  inputsAreInvalid: function() {
    const name = this.get('name') || "";
    const rating = this.get('rating');

    return name.length === 0 || !rating;
  }.property('name', 'rating'),

  filteredCourses: function() {
    let searchText = this.get('searchText') || "";
    searchText = searchText.toLowerCase();

    return this.get('model').filter(function(course) {
      let courseName = course.name.toLowerCase();
      return courseName.indexOf(searchText) > -1;
    });
  }.property('model.@each.name', 'searchText'),

  sortedCourses: Ember.computed.sort('filteredCourses', function(a, b) {
    return b.rating - a.rating;
  }),

  actions: {
    addRating: function() {
      const newRating = {
        name: this.get('name'),
        rating: this.get('rating'),
        comment: this.get('comment')
      };

      this.get('model').pushObject(newRating);

      this.setProperties({
        name: "",
        rating: "",
        comment: ""
      });
    }
  }
});
