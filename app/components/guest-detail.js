import Ember from 'ember';
import faker from 'faker';

export default Ember.Component.extend({
  classNames: ['ui', 'card'],

  actions: {
    removeGuest (guest) {
      console.log('guest');
      this.sendAction('removeGuest', guest);
    }
  }
});
