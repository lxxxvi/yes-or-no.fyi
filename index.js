document.addEventListener("DOMContentLoaded",function(){
  const yesOrNo = function() {
  var randomNumber = Math.floor(Math.random() * 1000)

  if (randomNumber < 500) {
      return "Yes";
    } else if (randomNumber == 500) {
      return "Maybe"
    } else {
      return "No"
    }
  }

  const refresh = function() {
    var element = document.querySelector('p');
    element.innerHTML = yesOrNo();
    element.classList.remove('flash');
    void element.offsetWidth;
    element.classList.add('flash');
  }

  refresh();
  var clickEvent = ((document.ontouchstart !== null) ? 'click' : 'touchstart');
  var button = document.querySelector('p');
  button.addEventListener(clickEvent, refresh, { passive: false });
});
