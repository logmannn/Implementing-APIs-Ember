import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    }
  }
  
});
