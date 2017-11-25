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
				styleObject : {
					'margin-bottom': '10px'
				}
			}
		},
		methods: {
  			addNewItem: function(){
  				this.$emit('item-added', this.newItemText);
  				this.newItemText = '';
  			}
  		}
	})

	Vue.component('list-item', {
		template: '#list-item',
		props: ['item'],
		computed: {
			isActive: function(){
				return this.item.isActive
			}
		},
		methods: {
			clicked: function(event){
				this.item.isActive = true;
				this.$emit('disable-bold-items', this.item);
			},
			remove: function(){
				this.$emit('item-removed', this.item);
			}
		}
	})


	Vue.component('app-sidebar', {
		template: '#app-sidebar',
		props: ['viewProfile'],
		data: function(){
			return {
				"openForm": false
			}
		},
		methods: {
			addNewItem: function(){
				this.openForm = true;
			},
			addItem: function(newItem){
  				this.viewProfile.items.push({
  					id       : this.viewProfile.items.length,
  					text     : newItem,
  					isActive : false
  				});
  			},
  			removeItem: function(itemRemoved){
  				this.viewProfile.items = this.viewProfile.items.filter(function(item){
  					return item.text !== itemRemoved.text
  				})
  			},
  			disableItems: function(clickedItem){
  				this.viewProfile.itemClicked = clickedItem.text;

				for(var i = 0; i < this.viewProfile.items.length; i++){
  					if(this.viewProfile.items[i].id === clickedItem.id)
  						continue
					this.viewProfile.items[i].isActive = false;
  				}
  			}
  		}
  	})

	Vue.component('app-content', {
		props: ['viewProfile'],
		template: '#app-content',
		data: function(){
			return {
				"empty": "No chart to display"
			}
		}
	})

	Vue.component('app-view', {
		template: '#app-view',
		props: ['viewProfile']
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
			viewProfile: {
				items: [],
				itemClicked: ''
			}
		}
	});

	return vm;
});