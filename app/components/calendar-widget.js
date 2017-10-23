import Component from '@ember/component';

export default Component.extend({
  classNames: ['calendar-widget'],
  days: 0,
  startDate: 0,
  month: 0,
  weekDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  patito: '',
  currentPage: 0,
  monthDays: [
    {
      'days': ['enero 1', 'enero2' ]
    },
    {
      'days': ['february1', 'february2']
    },
  ],

  init() {
    this._super(...arguments);
    this.set('patito', 'PATITO INIT')
  },

  currentMonthDays: Ember.computed('currentPage', 'monthDays', function() {
    return this.get('monthDays')[this.get('currentPage')].days;
  }),

  actions: {
    changePage() {
      this.set('currentPage', 1);
    }
  }
});
