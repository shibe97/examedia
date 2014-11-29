App.module("Footer", function(Footer, App, Backbone, Marionette, $, _){
    Footer.addInitializer(function(){
        var controller = new Controller();
    });

    var Controller = Marionette.Controller.extend({
        initialize: function(options){     
            App.footer.show(new FooterView());
        }
    });

    var FooterView = Marionette.ItemView.extend({
        template: "#Footer-view"
    });
});
