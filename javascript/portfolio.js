$.ajax({
		type:'GET',
		url: "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC",
		success: function(data) {printGif(data); }
	});

	function printGif(data) {
		var imageSource = `<img src=${data.data.image_url} alt='portfolio'>`;
		$("#gif").html(imageSource);
	}