import Route from '@ember/routing/route';

export default Route.extend({
  model: function(params) {
    var url = 'https://whoismyrepresentative.com/getall_mems.php?output=json&zip=' + params.zip;
    return Ember.$.getJSON(url).then(function(responseJSON) {
      return responseJSON.results;
    });
   }
});
