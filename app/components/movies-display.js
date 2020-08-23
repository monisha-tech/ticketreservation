import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
export default Component.extend({
  content: service(),

  values: computed('tabName', 'content', function() {
    let tab = this.tabName;
    if ( tab === 'movies' ) {
      return this.get('content.movies');
    } else if ( tab === 'events' ) {
      return this.get('content.events');
    }
  })
});
