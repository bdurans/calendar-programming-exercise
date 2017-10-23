import Component from '@ember/component';

export default Component.extend({
  classNames: ['calendar-widget'],
  days: 0,
  startDate: 0,
  month: 0,
  weekDays: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  currentPage: 0,
  monthWeeks: [],

  init() {
    this._super(...arguments);
    let totalDays = this.get('totalDays');
    let initialDay = this.get('initialDay');
    let initialMonth = this.get('initialMonth');
    let initialYear = this.get('initialYear');
    let holidays = processHolidays(this.get('holidays'));
    let monthWeeks = setMonthWeeks(totalDays, initialDay, initialMonth, initialYear, holidays);
    this.set('monthDays', monthWeeks)
  },

  currentMonthWeeks: Ember.computed('currentPage', 'monthWeeks', function() {
    return this.get('monthWeeks')[this.get('currentPage')].weeks;
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

function setMonthWeeks(totalDays, initialDay, initialMonth, initialYear, holidays) {
  let totalDaysFirstMonth = daysInMonth(initialMonth, initialYear);
  let monthWeeks = [];
  let weeksFirstMonth = [];
  let week = [];
  for (let i = 1; i <= totalDaysFirstMonth; i++) {
    if (i >= initialDay) {
      weeksFirstMonth.push(i);
    } else {
      weeksFirstMonth.push(null);
    }
  }
  monthWeeks.push({'weeks': weeksFirstMonth});
  return monthWeeks;
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
