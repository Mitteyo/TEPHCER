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




document.addEventListener('DOMContentLoaded', () => {
    console.log("Confession script loaded!"); // Check your console to see if this runs

    const triggerBtn = document.getElementById('cr-trigger-btn');
    const overlay = document.getElementById('cr-overlay');
    const note = document.querySelector('.cr-note');
    const toast = document.getElementById('cr-toast');
    const responseBtns = document.querySelectorAll('.cr-btn');

    if (!triggerBtn) { console.error("Could not find trigger button!"); return; }

    // Show the note
    triggerBtn.addEventListener('click', () => {
        overlay.classList.remove('cr-hidden');
        overlay.classList.add('cr-visible');
        note.style.transform = "scale(1) rotate(0deg)";
    });

    // Handle button clicks
    responseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Hide Note
            overlay.classList.remove('cr-visible');
            overlay.classList.add('cr-hidden');
            
            // Show Achievement
            toast.classList.remove('cr-hidden');
            toast.classList.add('cr-visible');
            
            // Hide Achievement after 3 seconds
            setTimeout(() => {
                toast.classList.remove('cr-visible');
                toast.classList.add('cr-hidden');
            }, 3000);
        });
    });
});