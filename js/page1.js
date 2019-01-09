window.onload = function(){
		ion.sound({
    sounds: [
    	{name: "bgm"},
        {name: "car"},
        {name: "gz"},
    ],
    path: "music/",
    preload: true,
    volume: 1.0
	});
	 ion.sound.play("bgm");	
	}

