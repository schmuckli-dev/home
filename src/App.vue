<template>
  <v-app>
    <div class="container" @click="openHome">
      <h1 class="headline">
        schmuckli.dev
      </h1>
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
  name: 'Home',
  components: {
    Footer
  },
  methods: {
    openHome(){
      this.$router.replace("home");
    }
  }
}
</script>

<style>
@import "./assets/css/layout.css";
</style>
