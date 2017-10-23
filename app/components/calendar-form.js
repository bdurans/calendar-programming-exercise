import Component from '@ember/component';

export default Component.extend({
  classNames: ['calendar-form'],
  showCalendar: false,
  startDate: '',
  totalDays: '',
  countryCode: '',

  actions: {
    callAPI() {
      let startDate = this.get('startDate');
      let totalDays = this.get('totalDays');
      let countryCode = this.get('countryCode');
      this.sendAction('processCalendarInfo', startDate, totalDays, countryCode)
    }
  }
});
