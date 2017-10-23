import Controller from '@ember/controller';

export default Controller.extend({
  holidays: [],
  apiKey: 'e3c09049-78dc-4c05-b765-c753a35703d3',
  showCalendar: false,
  startDate: '',
  totalDays: '',
  initialMonth:'',
  initialDay: '',
  initialYear: '',

  actions: {
    processCalendarInfo(startDate, totalDays, countryCode) {
      try {
        this.set('totalDays', parseInt(totalDays));
        let date = startDate.split('/');
        this.set('initialYear', date[2])
        this.set('initialMonth', date[0])
        this.set('initialDay', date[1])
        let queryParams = {
          'key': this.get('apiKey'),
          'country': countryCode,
          'year' : this.get('initialYear'),
          'month' : this.get('initialMonth')
        };
        let controller = this;
        let holidaysData = [];
        this.store.query('holiday', queryParams).then(function(data) {
          data.forEach(function(holiday) {
            holidaysData.push({'name': holiday.get('name'), 'date': holiday.get('date')});
          })
          controller.set('holidays', holidaysData)
          controller.toggleProperty('showCalendar')
        });

      } catch (e){
          console.log(e);
      }
    }
  }
});
