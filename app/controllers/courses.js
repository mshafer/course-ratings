import Ember from 'ember';

export default Ember.Controller.extend({
  inputsAreInvalid: function() {
    const name = this.get('name') || "";
    const rating = this.get('rating');

    return name.length === 0 || !rating;
  }.property('name', 'rating'),

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
