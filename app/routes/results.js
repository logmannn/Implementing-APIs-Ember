import Route from '@ember/routing/route';

export default Route.extend({
  model: function(params) {
    var url = 'https://cicero.azavea.com/v3.1/legislative_district?search_postal='+params.zip+'&search_country=US&format=json&key=a8f71a4e80a2e2d78d379ed3e29135da60bd2f15';
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
   }
});
