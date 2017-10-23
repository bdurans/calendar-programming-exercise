import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: 'https://holidayapi.com',
  namespace: 'v1',

  pathForType() {
    return 'holidays';
  }
});
