App.ForkRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        controller.set('original', model);
        controller.set('content', App.Paste.createRecord({content: model.get('content')}))
    },

    events: {
        save: function(model){
            model.addObserver('id', this, function(){
                this.transitionTo('show', model);
            });

            model.on('becameInvalid', this, function(model){
                alert(model.get('errors')['content'][0]);
            })

            if (model.get('isDirty')) {
                model.get('transaction').commit();
            }
        },

        cancel: function(model){
            console.log(this.get('controller.content'));
            this.transitionTo('show', model);
        }

    }
});