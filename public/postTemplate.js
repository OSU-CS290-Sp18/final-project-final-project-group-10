(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['postTemplate'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<article class=\"post\">\n  <div class=\"post-author-content\">\n    <p class=\"post-author\"><i class=\"fas fa-user-circle\"></i><a href=\"#\">"
    + alias4(((helper = (helper = helpers.Author || (depth0 != null ? depth0.Author : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Author","hash":{},"data":data}) : helper)))
    + "</a></p>\n  </div>\n\n  <div class=\"post-photo-caption\">\n    <div class=\"post-picture align-left\">\n      <img src=\""
    + alias4(((helper = (helper = helpers.Picture || (depth0 != null ? depth0.Picture : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Picture","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n\n    <div class=\"post-caption align-right\">\n    \n      "
    + alias4(((helper = (helper = helpers.Caption || (depth0 != null ? depth0.Caption : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Caption","hash":{},"data":data}) : helper)))
    + "\n      \n    </div>\n    <br class=\"clear\">\n  </div>\n  <div class=\"post-content\">\n    <div class=\"likeHeart\">\n      <i class=\"far fa-heart\"></i>\n    </div>\n    <div class=\"likeCount\">\n    \n      "
    + alias4(((helper = (helper = helpers.Likes || (depth0 != null ? depth0.Likes : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"Likes","hash":{},"data":data}) : helper)))
    + "\n      \n    </div>\n    <div class=\"likeLabel\">\n      likes\n    </div>\n  </div>\n</article>";
},"useData":true});
})();