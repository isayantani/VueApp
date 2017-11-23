define(['underscore', 'd3', 'vue'], function(_, d3, Vue){

	Vue.config.devtools = true;

	Vue.component('app-nav', {
		template: '#app-nav',
		props: ['header'],
		data: function(){
			return {
				
				styleObject : {
					'font-size'    : '16px',
					'color'        : 'blue',
					'margin-top'   : '10px',
					'margin-bottom': '5px',
					'margin-left'  : '16px'
				}
				
			}
		}
	})

	Vue.component('sidebar-form', {
		template: '#sidebar-form',
		data: function(){
			return {
				newItemText: '',
				counter: 0,
				styleObject : {
					'margin-bottom': '10px'
				}
			}
		},
		methods: {
  			addNewItem: function(){
  				this.$emit('item-added', this.newItemText, this.counter++);
  				this.newItemText = '';
  			}
  		}
	})

	Vue.component('list-item', {
		template: '#list-item',
		props: ['item'],
		methods: {
			remove: function(){
				this.$emit('item-removed', this.item);
			}
		}
	})


	Vue.component('app-sidebar', {
		template: '#app-sidebar',
		props: ['items'],
		data: function(){
			return {
				"openForm": false
			}
		},
		methods: {
			addNewItem: function(){
				this.openForm = true;
			},
			addItem: function(newItem, counter){
  				this.items.push({
  					id     : counter,
  					text   : newItem
  				});
  			},
  			removeItem: function(itemRemoved){
  				this.items.pop(itemRemoved)
  			}
  		}
  	})

	Vue.component('app-content', {
		template: '#app-content',
		data: function(){
			return {
				content: 'Content panel'
			}
		}
	})

	var vm = new Vue({
		el: '#app',
		data: {
			headerProfile: {
				userProfile : {
					name    : 'Sayantani',
					email   : 'sayantani.dasgupta@ayata.com',
				},
				loginType   : true,
				datetime    : new Date().toLocaleDateString(),
			},
			items: []
		}
	});

	return vm;
});