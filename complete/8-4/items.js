var items = [
    {name:"Item 1", price:499, img:"/img/p1.jpg"},
    {name:"Item 2", price:850, img:"/img/p2.jpg"},
    {name:"Item 3", price:600, img:"/img/p3.jpg"},
    {name:"Item 4", price:700, img:"/img/p4.jpg"},
    {name:"Item 5", price:550, img:"/img/p5.jpg"},
    {name:"Item 6", price:650, img:"/img/p6.jpg"},
    {name:"Item 7", price:780, img:"/img/p7.jpg"},
    {name:"Item 8", price:800, img:"/img/p8.jpg"},
    {name:"Item 9", price:590, img:"/img/p9.jpg"},
    {name:"Item 10", price:1090, img:"/img/p10.jpg"},
];
module.exports = {
    all:function() {
        return items;
    },
    get:function(name) {
        return items.filter(function(item) {
            return item.name === name;
        })[0];
    }
}