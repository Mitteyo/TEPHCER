$(document).ready(function () {
  var envelope = $("#envelope");
  var btn_open = $("#open");
  var btn_reset = $("#reset");

  envelope.click(function () {
    open();
  });
  btn_open.click(function () {
    open();
  });
  btn_reset.click(function () {
    close();
  });

  function open() {
    envelope.addClass("open").removeClass("close");
  }
  function close() {
    envelope.addClass("close").removeClass("open");
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const widget = document.getElementById('vinylWidget');
  const audio = document.getElementById('szaSong');
  const timerDisplay = document.getElementById('trackTimer');

  widget.addEventListener('click', function() {
   
    this.classList.toggle('active');

    
    if (this.classList.contains('active')) {
      audio.play();
    } else {
      audio.pause();
    }
  });

 
  audio.addEventListener('timeupdate', function() {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60);
    timerDisplay.innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  });
});
