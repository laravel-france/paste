App.ShowView = Ember.View.extend({
    tagName: 'div',
    
    didInsertElement: function() {
        editor = ace.edit("editor");
    	editor.setTheme("ace/theme/merbivore_soft");
    	editor.getSession().setTabSize(4);
	    editor.getSession().setMode("ace/mode/php");
		editor.setShowPrintMargin(false);
		editor.setReadOnly(true);

        this.set('editor', editor);
    }
});