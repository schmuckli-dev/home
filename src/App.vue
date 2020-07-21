<template>
  <v-app>
    <div class="container" @click="openHome">
      <v-layout wrap row>
        <v-flex sm2 xs12 style="text-align:center;">
          <img src="./assets/logo.png" width="100" height="100" />
        </v-flex>
        <v-flex sm10 xs12>
          <h1
            style="margin-bottom:0;"
            class="headline"
            :style="{ 'text-align': $vuetify.breakpoint.xs ? 'center' : 'left' }"
          >schmuckli.dev</h1>
          <div
            style="width:100%;"
            :style="{ 'text-align': $vuetify.breakpoint.xs ? 'center' : 'left' }"
          >
            <span>{{ $t("slogan") }}</span>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/footer/Footer";

export default {
  name: "Home",
  components: {
    Footer
  },
  methods: {
    openHome() {
      this.$router.replace("home");
    }
  }
};
</script>

<style>
@import "./assets/css/layout.css";
</style>
