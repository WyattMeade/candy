$.fn.extend

	# Define plugin Ataraxia and pass in settings
	candy: (options) ->

		settings = 
			container: $(".candy")
			width: "auto" # auto / example: 100% / example: 720px
			height: "auto" # auto / example: 100% / example: 404px
			sizing: false # true / false / youtube / fullscreen
			loop: true # true / false
			autoplay: true # true / false
			controls: true # true / false / default
			muted: false # true / false
			progress: true # true / false
			preload: true # true / false
			poster: false # false / image.jpg
			hover: false # false / true / inverse

		# Merge default settings with options
		opt = $.extend settings, options



		muteVideo = ->

			if opt.video.muted

		        opt.video.muted = false
		        $("#mute").find("i").attr("data-icon", "volume-up")
		        #volumeBar.value = 1

		    else

		        opt.video.muted = true
		        $("#mute").find("i").attr("data-icon", "mute")
		        #volumeBar.value = 0



		playPause = ->

			if opt.video.paused

		        opt.video.play()

		        $("#play").find("i").attr("data-icon", "pause")

		    else

		        opt.video.pause()

		        $("#play").find("i").attr("data-icon", "play")



		getTime = ->

			opt.video.addEventListener "timeupdate", () ->

			    $("#timeDisplay").text(opt.video.currentTime.toFixed(2))

			, false


			window.setInterval (t) ->
			  
			  if opt.video.readyState > 0
			    
			    $("#duration").text(opt.video.duration.toFixed(2))
			    
			    clearInterval(t);
			  
			,500


		    

		bindEvents = ->

			$(document).on "click", "#play", (e) ->

				e.preventDefault()

				playPause()


			$(document).on "click", "#mute", (e) ->

				e.preventDefault()

				muteVideo();




		renderTemplate = ->

			template = Handlebars.templates.player

			opt.container.append(template)

			opt.video = opt.container.find("video").get(0)

			console.log(opt.video)



		init = ->

			renderTemplate()

			bindEvents()

			getTime()



		init()