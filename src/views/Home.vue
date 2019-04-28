<template>
  <v-container>
    <h1>Welcome!</h1>
    <div class="app_container">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="app in apps" :key="app.key" style="padding:10px;">
          <AppLink :name="app.name" :url="app.url" :app_icon="app.app_icon" :color="app.color" />
        </v-flex>
      </v-layout>
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
      ]
    }
  },
  components: {
    AppLink
  }
}
</script>
<style scoped>
.app_container{
  margin-top: 30px;
}
</style>
