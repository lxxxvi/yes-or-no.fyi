import { h, app } from "hyperapp"

const getRandom = function() {
  const randomNumber = Math.floor(Math.random() * 1000)
  console.log(randomNumber);
  if (randomNumber < 500) {
    return "Yes";
  } else if (randomNumber == 500) {
    return "Maybe";
  } else {
    return "No";
  }
}

const state = {
  yayOrNay: getRandom()
}

const actions = {
  refresh: () => state => ({
    yayOrNay: getRandom()
  })
}

const view = (state, actions) => (
  <div>
    <h1>{state.yayOrNay}</h1>
    <button onclick={actions.refresh}>Wefresh!</button>
  </div>
)

app(state, actions, view, document.body)

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function() {
          console.log('Service Worker Registered');
    });
}
