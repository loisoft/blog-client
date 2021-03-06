import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.id);
  },
  
  actions: {
    generate() {
      const post = this.currentModel;
      const comment = this.store.createRecord('comment', { body: "Wachi wow", post: post });
      comment.save();
    }
  }
  
});
