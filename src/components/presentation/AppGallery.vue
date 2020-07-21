<template>
  <section>
    <h2>{{ $t("app_library") }}</h2>
    <div class="app_container">
      <v-layout row wrap justify-center>
        <v-flex xs12 sm6 md4 lg3 v-for="(app, index) in apps" :key="app.key" style="padding:10px;">
          <AppLink
            :index="index"
            :name="app.name"
            :url="app.url"
            :app_icon="app.app_icon"
            :color="app.color"
          />
        </v-flex>
        <div style="height:100px;width:100%;"></div>
      </v-layout>
    </div>
  </section>
</template>

<script>
import AppLink from "../dashboard/AppLink";

export default {
  name: "AppGallery",
  components: {
    AppLink
  },
  data() {
    return {
      apps: [
        {
          key: "dashbboard",
          name: "Dashboard",
          url: "https://dashboard.schmuckli.dev/",
          app_icon:
            "https://dashboard.schmuckli.dev/assets/logo/launcher_192.png",
          color: "#9A2C41"
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
          app_icon:
            "https://shoppinglist.schmuckli.dev/android-icon-192x192.png",
          color: "#24919B"
        },
        {
          key: "tasks",
          name: "Tasks",
          url: "https://tasks.schmuckli.dev/",
          app_icon: "https://tasks.schmuckli.dev/android-icon-192x192.png",
          color: "#2C439B"
        },
        {
          key: "tracky",
          name: "Tracky",
          url: "https://tracky.schmuckli.dev/",
          app_icon: "https://tracky.schmuckli.dev/android-icon-192x192.png",
          color: "#FFB024"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>