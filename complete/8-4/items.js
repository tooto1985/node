var items = [
	{name:"Item 1", price:499},
	{name:"Item 2", price:850},
	{name:"Item 3", price:600},
	{name:"Item 4", price:700},
	{name:"Item 5", price:550},
	{name:"Item 6", price:650},
	{name:"Item 7", price:780},
	{name:"Item 8", price:800},
	{name:"Item 9", price:590},
	{name:"Item 10", price:1090},
];
module.exports = {
	all:function() {
		return items;
	},
	get:function(name) {
		for(var i=0;i<items.length;i++) {
			if (items[i].name === name) {
				return items[i];
			}
		}			
	}
}