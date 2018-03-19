<template>
  <div id="home">
    <div class="page-header">Landing Page</div>
    

    <div class="category" v-for="(category,i) in results" :key="i">
      <div class="headings" v-text="category.name"/>

      
      <div class="event" v-for="(event, j) in category.events" :key="j" v-if=" (more[i] != 'more') || (j<5) ">
        <div class="link">
          <a :href="event.link" v-text="event.name" @click="eventClick"/>
        </div>
        <span class="description" v-html="event.description" />
      </div>
      <div v-if="more[i] == 'more'">...</div>
      <b><a v-if="more[i] != 'none'" @click="changeMoreState(i)">{{more[i]}}</a></b>  
    </div>
    <hr>
  </div>
</template>

<script>
import Vue from "vue";

var dataURL = "http://api.myjson.com/bins/fpuct";
export default {
  name: "Home",
  components: {},
  data: function() {
    return {
      more: [],
      results: []
    };
  },
  methods: {
    changeMoreState: function(i) {
      if (this.more[i] == "more") {
        Vue.set(this.more, i, "less");
      } else {
        Vue.set(this.more, i, "more");
      }
    },
    eventClick: function(e) {
     

      var signed = localStorage.getItem("signed");
      var registered = localStorage.getItem("registered");
     
      if (signed || registered) {
        return true;
      } else {
        e.preventDefault();
        if (confirm("You need to login or register!")) {
          this.$router.push("/sign");
        }
      }
      return false;
    }
  },
  mounted() {
    this.$http.get(dataURL).then(
      response => {
        this.results = response.data;

        this.more = [];
        var self = this;
        this.results.forEach(function(category) {
          if (category.events.length > 5) {
            self.more.push("more"); //show more
          } else {
            self.more.push("none"); //don't show more/less
          }
        });
      },
      response => {
        // error callback
      }
    );
  }
};
</script>
<style>
.page-header {
  text-align: center;
  font-size: 2em;
}
.category {
  margin: 30px 20px;
}
.event {
  margin: 10px 0px;
}
.headings {
  font-size: 1.5em;
}
.link {
  font-size: 1.2em;
}
/* selected link */
a:active {
  color: #2f5496;
}
.description b {
  font-weight: 400;
  color: #5a5a5a;
}
</style>

