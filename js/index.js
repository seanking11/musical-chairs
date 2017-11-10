var audioMusic = document.getElementById('audioMusic');
var audioDing = document.getElementById('audioDing');
var audioBuzz = document.getElementById('audioBuzz');

$('.input').on('input', function(){
  var value = $(this).val();
  if (value.substr(-1) == 'p') {
    // Play music
    audioMusic.currentTime = 0;
    audioMusic.play();
  } else if (value.substr(-1) == 'k') {
    // Stop music
    audioMusic.pause();
  } else if (value.substr(-1) == 'z') {
    // Valid sit
    audioDing.currentTime = 0.1;
    audioDing.play();
  } else if (value.substr(-1) == 'x') {
    // Invalid sit
    audioBuzz.currentTime = 1;
    audioBuzz.play();
  } else if (value.substr(-1) == 'y') {
    // Win
    audioWin.currentTime = 0;
    audioWin.play();
  }
})
