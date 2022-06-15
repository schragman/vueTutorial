const app = Vue.createApp({
  // Optionen
  data: function () {
    return {
      mysubmissions: submissions, // aus seed.js
      totalVotes: 0
    };
  },
  computed: {
    /*totalVotes() {
      console.log("computed property ausgeführt.");
      return this.mysubmissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    }*/
    sortedSubmissions() {
      return this.mysubmissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
  },
  methods: {
    /*upvote: function () {},*/
    upvote(submissionId) {
      const submission = this.mysubmissions
        .find((iteratedItem) => iteratedItem.id === submissionId);
      submission.votes++;
      /*console.log();
      this.mysubmissions[0].votes++;*/
    },
    logConsole(text) {
      console.log(text);
    },
    /*totalVotes() {
      return this.mysubmissions.reduce((totalVotes, submission) => {
        return totalVotes + submission.votes;
      }, 0);
    }*/
  },

  watch: {
    /*mysubmissions(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    },*/
    mysubmissions: {
      handler() {
        this.totalVotes = this.mysubmissions.reduce((totalVotes, submission) => {
          return totalVotes + submission.votes;
        }, 0);
      },
      deep: true,
      immediate: true
    },
    totalVotes(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    },
  }
});

//Liefert die Instanz zur Root-Component zurück
const vm = app.mount('#app')