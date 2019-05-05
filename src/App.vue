<template>
  <v-app>
    <div class="container">
      <h1 class="headline">
        schmuckli.dev
      </h1>
    </div>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
.headline {
  text-align: left;
  margin-top: 30px;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.container {
  flex: none;
}
</style>
