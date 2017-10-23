import Component from '@ember/component';

export default Component.extend({
  classNames: ['calendar-widget'],
  days: 0,
  startDate: 0,
  month: 0,
  weekDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  currentPage: 0,
  monthDays: [],

  init() {
    this._super(...arguments);
    let totalDays = this.get('totalDays');
    let initialMonth = this.get('initialMonth');
    let initialYear = this.get('initialYear');
    let holidays = processHolidays(this.get('holidays'));
    setMonthDays(totalDays, initialMonth, initialYear, holidays);
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


function processHolidays(holidays) {
  return holidays.map(function(holiday) {
    let date = holiday['date'];
    return {
      'name': holiday['name'],
      'date': {
        'day': date.getDate(),
        'month': date.getMonth()+1,
        'year': date.getFullYear()
      }
    }
  })
}

function setMonthDays() {

}

// function daysInMonth(month, year) {
//   return new Date(year, month, 0).getDate();
// }
