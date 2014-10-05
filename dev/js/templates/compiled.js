this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["player"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n	<video id=\"video1\" width=\"720\" height=\"404\" preload=\"metadata\">\n\n		<source src=\"video/starry-night.mp4\" type=\"video/mp4\">\n		<source src=\"video/starry-night.ogv\" type=\"video/ogv\">\n		<source src=\"video/starry-night.webm\" type=\"video/webm\">\n		<p>Your browser does not support HTML5 video.</p>\n\n	</video>\n\n	<div class=\"progress\">\n		<div class=\"duration\"></div>\n	</div>\n\n	<div class=\"controls\">\n		\n		<a id=\"play\"><i data-icon=\"play\"></i></a>\n		<!--<a id=\"stop\"><i data-icon=\"stop\"></i></a>-->\n		<!--<a id=\"replay\"><i data-icon=\"replay\"></i></a>-->\n		<a id=\"mute\"><i data-icon=\"mute\"></i></a>\n		<!--<input type=\"range\" id=\"volume\" min=\"0\" max=\"1\" step=\"0.1\" value=\"1\">-->\n		<!--<a id=\"expand\"><i data-icon=\"expand\" ></i></a>\n		<a id=\"shrink\"><i data-icon=\"shrink\"></i></a>\n		<a id=\"default\"><i data-icon=\"default\"></i></a>-->\n		<div class=\"time\">\n			<span id=\"timeDisplay\"></span> / <span id=\"duration\"></span>\n		</div>\n\n	</div>\n</div>";
  });