const app = Vue.createApp({
  // Optionen
  data: function () {
    return {
      mysubmissions: submissions, // aus seed.js
      //totalVotes: 0
    };
  },
  computed: {
    totalVotes() {
      //console.log("computed property ausgeführt.");
      return this.mysubmissions.reduce((ergebnis, submission) => {
        return ergebnis + submission.votes;
      }, 0);
    },
    sortedSubmissions() {
      return this.mysubmissions.sort((a, b) => {
        return b.votes - a.votes;
      });
    },
    cardHeaderBackgroundColor() {
      return {
        "bg-primary": this.totalVotes >= 50,
        "text-white": this.totalVotes >= 50
      };
    },
    cardTitleFontSize() {
      return {fontSize: this.totalVotes + "px"}
    },
  },
  methods: {
    /*upvote: function () {},*/
    upvote(submissionId) {
      const submission = this.mysubmissions
        .find((iteratedItem) => iteratedItem.id === submissionId);
      submission.votes++;
    },
  },

  watch: {
    /*mysubmissions(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    },*/
   /* mysubmissions: {
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
    },*/
  }
});

app.component("SubmissionListItem", {
  //Optionen
  props: ["submission"],
  methods: {
    upvote() {
      this.submission.votes++;
    }
  },
  template: `
    <div class="d-flex">
      <div class="d-shrink-0">
        <img v-bind:src="submission.img"/>
      </div>
      <div class="flex-grow-1 ms-3">
        <h5>
          {{ submission.title }}
          <span class="float-end text-primary"
                style="curser: pointer"
                v-on:click="upvote()">
              <i class="fa fa-chevron-up"></i>
              <strong>{{ submission.votes }}</strong>
          </span>
        </h5>
        <div v-html="submission.desc"></div>
        <small class="text-muted">Eingericht von: {{ submission.author }}</small>
      </div>
  </div>
  `
})

//Liefert die Instanz zur Root-Component zurück
const vm = app.mount('#app')