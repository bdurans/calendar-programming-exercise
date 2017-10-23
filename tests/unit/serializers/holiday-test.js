import { moduleForModel, test } from 'ember-qunit';

moduleForModel('holiday', 'Unit | Serializer | holiday', {
  // Specify the other units that are required for this test.
  needs: ['serializer:holiday']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
