<template>
  <v-container>
    <v-layout class="dashboard_opener" row wrap @click="openCloseDashboard">
      <v-flex xs6>
        <span>Show all apps</span>
      </v-flex>
      <v-flex xs6 style="text-align:right;">
        <v-icon>keyboard_arrow_down</v-icon>
      </v-flex>
    </v-layout>
    <div class="expandable" :style="dashboard_style">
      <!--<v-layout row wrap>
        <v-flex xs6>
          <h2>Dashboard</h2>
        </v-flex>
        <v-flex xs6 style="text-align:right;">
          <h2>{{ hour }}:{{ minute }}</h2>
        </v-flex>
      </v-layout>-->
      <div class="app_container">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="(app, index) in apps" :key="app.key" style="padding:10px;">
            <AppLink :index="index" :name="app.name" :url="app.url" :app_icon="app.app_icon" :color="app.color" />
          </v-flex>
          <div style="height:300px;width:100%;"></div>
        </v-layout>
      </div>
    </div>
    <div>
      <h1>Apps, built for the web</h1>
      <p>Thanks to the power of progressive web apps, you can use all the apps in your browser.</p>
    </div>
  </v-container>
</template>
<script>
import AppLink from "../components/AppLink";

export default {
  name: "Home",
  data(){
    return {
      apps: [
        {
          key: "wallet",
          name: "Wallet",
          url: "https://wallet.schmuckli.dev/",
          app_icon: "https://wallet.schmuckli.dev/android-icon-192x192.png",
          color: "#9D6447"
        },
        {
          key: "shoppinglist",
          name: "Shoppinglist",
          url: "https://shoppinglist.schmuckli.dev/",
          app_icon: "https://shoppinglist.schmuckli.dev/android-icon-192x192.png",
          color: "#24919B"
        }
      ],
      hour: "",
      minute: "",

      dashboard_height: 0,
      dashboard_opacity: 0
    }
  },
  components: {
    AppLink
  },
  mounted(){
    this.startTime();
  },
  computed: {
    dashboard_style() {
      return "max-height: " + this.dashboard_height + "px;opacity: " + this.dashboard_opacity + ";";
    }
  },
  methods: {
    startTime(){
      var global_this = this;
      setInterval(function(){
        var date = new Date();
        global_this.minute = (date.getMinutes()+"").padStart(2, "0");
        global_this.hour = (date.getHours()+"").padStart(2, "0");
      }, 1000);
    },
    openCloseDashboard(){
      if(this.dashboard_height === 0){
        this.dashboard_height = 500;
        this.dashboard_opacity = 1;
      }else{
        this.dashboard_height = 0;
        this.dashboard_opacity = 0;
      }
    }
  }
}
</script>
<style scoped>
.app_container{
  margin-top: 30px;
}
.expandable{
  max-height: 0;
  opacity: 0;
  transition: all 0.3s;
}
.dashboard_opener {
  color: grey;
}
</style>
