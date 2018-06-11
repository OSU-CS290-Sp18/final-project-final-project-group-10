(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['postTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"post\">\n  <div class=\"post-author-content\">\n    <p class=\"post-author\"><i class=\"fas fa-user-circle\"></i><a href=\"#\">"
    + alias4(((helper = (helper = helpers.author || (depth0 != null ? depth0.author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"author","hash":{},"data":data}) : helper)))
    + "</a></p>\n  </div>\n\n  <div class=\"post-photo-caption\">\n    <div class=\"post-picture\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.URL || (depth0 != null ? depth0.URL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"URL","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"post-content\">\n      <p class=\"post-likes\">\n        <i class=\"far fa-heart\"></i>100 likes\n      </p>\n      <p class=\"post-caption\">\n        "
    + alias4(((helper = (helper = helpers.caption || (depth0 != null ? depth0.caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"caption","hash":{},"data":data}) : helper)))
    + "\n      </p>\n    </div>\n  </div>\n</article>\n";
},"useData":true});
})();