function boostVolume() {
    var videos = document.getElementsByTagName("video");
    for (var i = 0; i < videos.length; i++) {
      videos[i].volume += 0.1;
    }
    var audios = document.getElementsByTagName("audio");
    for (var i = 0; i < audios.length; i++) {
      audios[i].volume += 0.1;
    }
  }
  
  chrome.browserAction.onClicked.addListener(boostVolume);