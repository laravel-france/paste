App.ForkView = Ember.View.extend({
    tagName: 'div',
    
    didInsertElement: function() {
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/merbivore_soft");
        editor.getSession().setTabSize(4);
        editor.getSession().setMode("ace/mode/php");
        editor.setShowPrintMargin(false);

        that = this;
        editor.getSession().on('change', function(e) {
            that.get('controller.content').set('content', editor.getSession().getValue()); 
        });
    }
});
