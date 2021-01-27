chrome.commands.onCommand.addListener(function(command) {
  
  let video = document.getElementsByTagName("video")[0];

  if (!video) {
    return
  }

  switch (command)
  {
    case "skip-forward-5":
      video.currentTime -= 5;
      break;
    case "skip-5":
      video.currentTime += 5;
      break;
    case "skip-forward-10":
      video.currentTime -= 10;
      break;
    case "skip-10":
      video.currentTime += 10;
      break;
  }
});
