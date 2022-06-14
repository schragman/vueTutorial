const app = Vue.createApp({
  // Optionen
  data: function () {
    return {
      mysubmissions: submissions, // aus seed.js
    };
  }
});

//Liefert die Instanz zur Root-Component zurück
const vm = app.mount('#app')