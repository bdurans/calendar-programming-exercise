# calendar-programming-exercise

## Requirements not implement
I focused first in consuming the API of holidays and processing the information and that left with not enough time for finishing the following requirements: 
* Render a calendar that spans as many weeks 
* The days should be color coded
* Rollover label on Holidays. 

## List of bugs
* The form doesn't have the enough validations on the fields to ensure that there will be no errors
* If the user writes an invalid country code the application will fail

## Things I would do if I had more time to complete the task:
* My idea was to create an object based on the information given, this object would be an array of months and each month would have weeks and each week would have days. Each month object would have valid and invalid days that would be used to render the calendar. If a day match with one of the holidays, it would have extra information to be used on the render of the calendar.
* I would add a previous and next month buttons (two arrows), to switch between the months. There is a computed property in the calendar-widget component that will update the information based on the current position, then the information will be updated with something like `this.get('months')[position]`
* For the colors of the days in the calendar, each day object would have the respective color as `key:value`, so it will green by default, unless the day match with a holiday or if is the first or the last day, since the weeks start on Sunday and finish in Saturday.


## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone <repository-url>` this repository
* `cd calendar-programming-exercise`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).
* Visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)


## Further Reading / Useful Links

* [ember.js](https://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
