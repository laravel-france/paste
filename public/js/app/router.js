App.Router.map(function(){
	this.route('new');
	this.route('show', {path: ':paste_id'});
	this.route('fork', {path: ':paste_id/fork'});
})