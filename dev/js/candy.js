(function() {
  $.fn.extend({
    candy: function(options) {
      var bindEvents, getTime, init, muteVideo, opt, playPause, renderTemplate, settings;
      settings = {
        container: $(".candy"),
        width: "auto",
        height: "auto",
        sizing: false,
        loop: true,
        autoplay: true,
        controls: true,
        muted: false,
        progress: true,
        preload: true,
        poster: false,
        hover: false
      };
      opt = $.extend(settings, options);
      muteVideo = function() {
        if (opt.video.muted) {
          opt.video.muted = false;
          return $("#mute").find("i").attr("data-icon", "volume-up");
        } else {
          opt.video.muted = true;
          return $("#mute").find("i").attr("data-icon", "mute");
        }
      };
      playPause = function() {
        if (opt.video.paused) {
          opt.video.play();
          return $("#play").find("i").attr("data-icon", "pause");
        } else {
          opt.video.pause();
          return $("#play").find("i").attr("data-icon", "play");
        }
      };
      getTime = function() {
        opt.video.addEventListener("timeupdate", function() {
          return $("#timeDisplay").text(opt.video.currentTime.toFixed(2));
        }, false);
        return window.setInterval(function(t) {
          if (opt.video.readyState > 0) {
            $("#duration").text(opt.video.duration.toFixed(2));
            return clearInterval(t);
          }
        }, 500);
      };
      bindEvents = function() {
        $(document).on("click", "#play", function(e) {
          e.preventDefault();
          return playPause();
        });
        return $(document).on("click", "#mute", function(e) {
          e.preventDefault();
          return muteVideo();
        });
      };
      renderTemplate = function() {
        var template;
        template = Handlebars.templates.player;
        opt.container.append(template);
        opt.video = opt.container.find("video").get(0);
        return console.log(opt.video);
      };
      init = function() {
        renderTemplate();
        bindEvents();
        return getTime();
      };
      return init();
    }
  });

}).call(this);
