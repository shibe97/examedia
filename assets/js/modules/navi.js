App.module("Navi", function(Navi, App, Backbone, Marionette, $, _){
    this.startWithParent = false;
    Navi.addInitializer(function(){
        var controller = new Controller();
    });

    var Controller = Marionette.Controller.extend({
        initialize: function(){
            Navi.collection = new NaviCollection([
                { name: "news", selected: true },
                { name: "concept", selected: false },
                { name: "works", selected: false },
                { name: "contact", selected: false }
            ]);
            App.navi.show(new NaviCompositeView({
                collection: Navi.collection
            }));
        }
    });

    var NaviModel = Backbone.Model.extend({
        initialize: function(){
            _.bindAll(this, "change");
            App.vent.on("change:content", this.change);
        },
        defaults: {
            name: "NEWS",
            selected: false
        },

        /**
         * ルーターの切り替えをナビモデルに反映
         *
         */ 
        change: function(content){
            if(this.get("name") === content){
                this.set("selected", true);
            } else {
                this.set("selected", false);
            }
        }
    });

    var NaviCollection = Backbone.Collection.extend({
        model: NaviModel
    });

    var NaviItemView = Marionette.ItemView.extend({
        tagName: "li",
        template: "#Navi-ItemView",
        modelEvents: {
            "all": "render"
        }
    });

    var NaviCompositeView = Marionette.CompositeView.extend({
        childView: NaviItemView,
        childViewContainer: "ul",
        template: "#Navi-CompositeView"
    });
});
