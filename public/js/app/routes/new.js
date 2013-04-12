App.NewRoute = Ember.Route.extend({
    model: function() {
        return App.Paste.createRecord();
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

    	cancel: function(){
    		ctrl = this.get('controller');
    		ctrl.get('content.transaction').rollback();
    		ctrl.set('content', App.Paste.createRecord());
    	}

    }

});
