var console = { log: print, warn: print, error: print };
var setTimeout = function(fn, ms) { fn(); };
var clearTimeout = function() {};
var document = {
  readyState: 'complete',
  getElementById: function(id) {
    return {
      id: id,
      style: {},
      classList: { add: function(){}, remove: function(){}, contains: function(){} },
      children: [],
      parentElement: { children: [] },
      innerHTML: '',
      addEventListener: function(){},
      insertAdjacentHTML: function(pos, html){ print("Inserted HTML into " + this.id + ": " + html.substring(0, 50) + "..."); },
      scrollIntoView: function(){},
      remove: function(){}
    };
  },
  addEventListener: function() {}
};
var window = {
  location: { hostname: 'localhost' },
  addEventListener: function() {},
  innerWidth: 1000
};
