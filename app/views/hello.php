<html>
<head>
	<title>Pastebox laravel.fr</title>
	<script type="text/javascript" src="/js/vendors/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="/js/vendors/handlebars.js"></script>
	<script type="text/javascript" src="/js/vendors/ember-1.0.0-rc.2.js"></script>
	<script type="text/javascript" src="/js/vendors/ember-data.js"></script>

	<script type="text/javascript" src="/js/app/app.js"></script>
	<script type="text/javascript" src="/js/app/store.js"></script>
	<script type="text/javascript" src="/js/app/router.js"></script>

	<script type="text/javascript" src="/js/app/models/paste.js"></script>

	<script type="text/javascript" src="/js/app/controllers/fork.js"></script>

	<script type="text/javascript" src="/js/app/routes/index.js"></script>
	<script type="text/javascript" src="/js/app/routes/new.js"></script>
	<script type="text/javascript" src="/js/app/routes/fork.js"></script>

	<script type="text/javascript" src="/js/app/views/new.js"></script>
	<script type="text/javascript" src="/js/app/views/show.js"></script>
	<script type="text/javascript" src="/js/app/views/fork.js"></script>

	<link rel="stylesheet" type="text/css" href="/css/main.css">
	<style type="text/css" media="screen">
	    #editor { 
	        position: absolute;
	        top: 0;
	        right: 0;
	        bottom: 0;
	        left: 0;
	    }
	</style>
</head>
<body>

<script type="text/x-handlebars">
{{ outlet }}
</script>
    
<script src="http://rawgithub.com/ajaxorg/ace-builds/master/src-noconflict/ace.js" type="text/javascript" charset="utf-8"></script>

<script type="text/x-handlebars" id="_logo">
<h1>
    <a class="brand" href="http://laravel.fr/">
    	<img src="http://laravel.fr/img/laravel_logo.png" style="max-width:13%" alt="logo">                    Laravel France
	</a>
</h1>
</script>
<script type="text/x-handlebars" id="new">
	<div id="editor"></div>
	{{partial "logo"}}
	<ul>
		<li><a {{action 'save' content}}>Enregistrer</a></li>
		<li><a {{action 'cancel'}}>Annuler</a></li>
	</ul>
</script>

<script type="text/x-handlebars" id="fork">
	<div id="editor">{{unbound model.content}}</div>
	{{partial "logo"}}
	<ul>
		<li><a {{action 'save' content}}>Enregistrer</a></li>
		<li><a {{action 'cancel' original}}>Annuler</a></li>
	</ul>
</script>

<script type="text/x-handlebars" id="show">
	<div id="editor">{{unbound model.content}}</div>
	{{partial "logo"}}
	<ul>
		<li>{{#linkTo 'new'}}Nouveau{{/linkTo}}</li>
		<li>{{#linkTo 'fork' content}}Dupliquer{{/linkTo}}</li>
	</ul>
</script>



</body>
</html>