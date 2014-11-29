App.module("Models", function(Models, App, Backbone, Marionette, $, _){
    Models.addInitializer(function(){
        Models.current =  new Current();
    });

    var Current = Backbone.Model.extend({
        defaults: {
            navi: "news"
        }
    });
});
