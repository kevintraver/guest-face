import Ember from 'ember';

export default Ember.Component.extend({

  formattedNewGuestNames: Ember.computed('newGuestNames', function() {
    return this.get('newGuestNames');
  }),

  isValid: Ember.computed('formattedNewGuestNames', function() {
    this.get('formattedNewGuestNames')
  }),

  actions: {
    addGuest (names) {
      var namesList = names.split(',');

      for(var i=0, len=namesList.length; i < len; i++){
        this.get('guests').pushObject(namesList[i].trim());
      }

      this.set('newGuestName', '');
    },

    removeGuest (guest) {
      this.get('guests').removeAt(guest);
    }

  }
});
