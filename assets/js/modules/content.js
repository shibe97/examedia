App.module("Content", function(Content, App, Backbone, Marionette, $, _){
    this.startWithParent = false;
    Content.addInitializer(function(){
        var controller = new Controller();
    });

    var Controller = Marionette.Controller.extend({
        initialize: function(){
            _.bindAll(this, "change");
            App.vent.on("change:content", this.change);
        },
        change: function(content){
            switch(content){
                case "news":
                    App.content.show(new NewsView());
                    break;
                case "concept":
                    App.content.show(new ConceptView());
                    break;
                case "works":
                    App.content.show(new WorksView());
                    break;
                case "contact":
                    App.content.show(new ContactView());
                    break;
                default:
                    App.content.show(new NewsView());
                    break;
            }
        }
    });

    var NewsView = Marionette.ItemView.extend({
        template: "#Content-News-view"
    });

    var ConceptView = Marionette.ItemView.extend({
        template: "#Content-Concept-view"
    });

    var WorksView = Marionette.ItemView.extend({
        template: "#Content-Works-view"
    });

    var ContactView = Marionette.ItemView.extend({
        template: "#Content-Contact-view"
    });
});
