import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType){
    let holidaysWithID = []
    payload['holidays'].forEach(function(holiday, index) {
      holiday['id'] = index;
      holidaysWithID.push(holiday);
    })
    payload = { 'holidays': holidaysWithID }
    return this._super(store, primaryModelClass, payload, id, requestType)
  }
});
