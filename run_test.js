var currentLang = 'fr';
var document = {
  readyState: 'complete',
  getElementById: function(id) {
    return {
      style: {},
      classList: { add: function(){}, remove: function(){}, contains: function(){} },
      children: [],
      parentElement: { children: [] },
      innerHTML: '',
      addEventListener: function(){}
    };
  },
  addEventListener: function() {}
};
var window = {
  location: { hostname: 'localhost' },
  addEventListener: function() {},
  innerWidth: 1000
};
