import Component from '@ember/component';

export default Component.extend({
  actions: {
    zipLookup() {
      var params = {
        zip: this.get('zip')
      };
      this.sendAction('zipLookup', params);
    }
  }  
});
