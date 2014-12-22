var App = new Backbone.Marionette.Application();
App.addInitializer(function(){
    App.addRegions({
        navi : ".region-navi",
        content : ".region-content",
        footer : ".region-footer"
    });
    App.Navi.start();
    App.Content.start();
    var router = new Router();
});
var Router = Backbone.Router.extend({
    initialize : function(){
        Backbone.history.start();
    },
    routes : {
        "" : "index",
        ":content" : "changeContent"
    },
    index : function(){
        this.navigate("works", { trigger: true });
    },
    changeContent : function(content){
        App.vent.trigger("change:content", content);
    }
});
