var volumeSlider = document.getElementById('volume-slider');
var volumeLabel = document.getElementById('volume-level');
volumeSlider.addEventListener('input', function() {
	var volumeLevel = volumeSlider.value;
	volumeLabel.innerText = volumeLevel + '%';
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.executeScript(
			tabs[0].id,
			{code: 'document.getElementsByTagName("audio")[0].volume = ' + (volumeLevel / 100) + ';'}
		);
	});
});
