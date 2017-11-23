require.config({
	baseUrl: 'js',

	waitSeconds: 0,

	paths: {
		jquery	    : 'libs/jquery/jquery-3.2.1',
		underscore	: 'libs/underscore-1.8.3/underscore',
		bootstrap	: 'libs/bootstrap-3.3.7/bootstrap',
		vue			: 'libs/vue/vue',
		d3			: 'libs/d3/d3.v3',
		text        : 'libs/text'
	},

	shim: {
		jquery: {
			exports: "$"
		},
		underscore: {
			exports: "_"
		},
		bootstrap: {
        	deps: ['jquery']
    	},
	}
});

// Load our app module and pass it to our definition function

require(['application'], function(App) {
});