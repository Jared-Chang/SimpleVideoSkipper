chrome.commands.onCommand.addListener(function(command) {
  let script = 'document.getElementsByTagName("video")[0].currentTime';

  switch (command)
  {
    case "skip-forward-5":
      script += ' += 5';
      break;
    case "skip-5":
      script += ' -= 5';
      break;
    case "skip-forward-10":
      script += ' += 10';
      break;
    case "skip-10":
      script += ' -= 10';
      break;
  }

  chrome.tabs.executeScript({
    code: script
  });
});
