chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.executeScript(
		tabs[0].id,
		{code: 'var volume = Math.floor(document.getElementsByTagName("audio")[0].volume * 100); volume;'},
		function(result) {
			var volumeLevel = result[0];
			var volumeSlider = document.getElementById('volume-slider');
			var volumeLabel = document.getElementById('volume-level');
			volumeSlider.value = volumeLevel;
			volumeLabel.innerText = volumeLevel + '%';
		}
	);
});
