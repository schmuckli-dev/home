<template>
  <v-container>
    <v-layout class="dashboard_opener" row wrap @click="openCloseDashboard">
      <v-flex xs6>
        <span>{{ $t("show_all_apps") }}</span>
      </v-flex>
      <v-flex xs6 style="text-align:right;">
        <v-icon>{{ dashboard_open_icon }}</v-icon>
      </v-flex>
    </v-layout>
    <slide-up-down :active="isDashboardOpen" :duration="400">
      <div class="app_container">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="(app, index) in apps" :key="app.key" style="padding:10px;">
            <AppLink :index="index" :name="app.name" :url="app.url" :app_icon="app.app_icon" :color="app.color" />
          </v-flex>
          <div style="height:100px;width:100%;"></div>
        </v-layout>
      </div>
    </slide-up-down>
    <Presentation />
  </v-container>
</template>
<script>
import Vue from "vue";
import AppLink from "../components/dashboard/AppLink";
import Presentation from "../components/presentation/Presentation";

import SlideUpDown from 'vue-slide-up-down';
import cookies from 'js-cookie';

Vue.component('slide-up-down', SlideUpDown);

export default {
  name: "Home",
  data(){
    return {
      apps: [
        {
          key: "dashbboard",
          name: "Dashboard",
          url: "https://dashboard.schmuckli.dev/",
          app_icon: "https://dashboard.schmuckli.dev/assets/logo/launcher_192.png",
          color: "#00630A"
        },
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

      isDashboardOpen: cookies.get("isDashboardOpen") === 'true' || false
    }
  },
  components: {
    AppLink,
    Presentation
  },
  mounted(){
    this.startTime();
  },
  computed: {
    dashboard_open_icon(){
      return !this.isDashboardOpen ? "keyboard_arrow_down" : "keyboard_arrow_up";
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
      this.isDashboardOpen = !this.isDashboardOpen;
      cookies.set("isDashboardOpen", this.isDashboardOpen, { expires: 365 * 10 });
    }
  }
}
</script>
<style scoped>
.app_container{
  margin-top: 30px;
}
.dashboard_opener {
  color: grey;
  cursor: pointer;
  padding-bottom: 50px;
}
</style>
