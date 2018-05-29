Todos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

Todos.View = Ember.View.extend({
    style: function() {
      return "background-color:" + this.get('color');
    }.property('color').cacheable()
});

Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);
