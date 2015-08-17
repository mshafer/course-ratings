import Ember from 'ember';

export default Ember.Controller.extend({
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
