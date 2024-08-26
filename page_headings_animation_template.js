function consoleText(words, id, colors, callback) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);

  // Track if animation is complete
  var totalWords = words.length;
  var currentWordIndex = 0;

  function animateText() {
      if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[currentWordIndex].substring(0, letterCount);
          window.setTimeout(function() {
              var usedColor = colors.shift();
              colors.push(usedColor);
              currentWordIndex = (currentWordIndex + 1) % totalWords;
              x = 1;
              target.setAttribute('style', 'color:' + colors[0]);
              letterCount += x;
              waiting = false;
          }, 1000);
      } else if (letterCount === words[currentWordIndex].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function() {
              x = -1;
              letterCount += x;
              waiting = false;
          }, 1000);
      } else if (waiting === false) {
          target.innerHTML = words[currentWordIndex].substring(0, letterCount);
          letterCount += x;
      }

      // Check if animation is complete
      if (currentWordIndex === 0 && letterCount === 0 && waiting === false) {
          if (callback) callback();
      }
  }

  window.setInterval(animateText, 120);

  window.setInterval(function() {
      if (visible === true) {
          con.className = 'console-underscore hidden';
          visible = false;
      } else {
          con.className = 'console-underscore';
          visible = true;
      }
  }, 400);
}

consoleText(
  ['Website Design', 'UI/UX Design', 'Digital Marketing', 'Branding', 'Logo Design', 'Hosting Options', '&lt;a&gt; Anchor Website Design Studio'], 
  'text', 
  ['tomato', 'palegoldenrod', 'rebeccapurple', 'lightblue', 'lightcoral', 'rebeccapurple', 'white'], 
  function() {
      setTimeout(function() {
          // Retrieve the target URL from query parameters
          const urlParams = new URLSearchParams(window.location.search);
          const target = urlParams.get('target') || 'pissy_4.html'; // Fallback URL if no target specified
          window.location.href = target;
      }, 37600);
  }
);
