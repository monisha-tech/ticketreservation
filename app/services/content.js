import Service, { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Service.extend({

  movies: computed(function() {
    let contents = [];
    contents.pushObjects([
      {
        name: 'Master'
      }, {
        name: 'Soorarai Potru'
      }, {
        name: 'Valimai'
      }, {
        name: 'Jagamey Thanthiram'
      }
    ]);
    return contents;
  }),
  events: computed(function() {
    let contents = [];
    contents.pushObjects([
      {
        name: 'Event 1'
      }, {
        name: 'Event 2'
      }, {
        name: 'Event 3'
      }, {
        name: 'Event 4'
      }
    ]);
    return contents;
  }),
});
