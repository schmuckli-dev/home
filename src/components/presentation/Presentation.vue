<template>
  <div>
    <h2>Apps, built for the web</h2>
    <v-layout wrap row class="justify-center">
      <v-flex xs12 sm6 md3>
        <HighLightPoint title="Browser" color="blue" description="Thanks to the power of progressive web apps, you can use all the apps in your browser." icon="fal fa-globe" />
      </v-flex>
      <v-flex xs12 sm6 md3>
        <HighLightPoint title="Offline" color="red" description="All the apps can also be partly used offline. This allows it, to continue using the app, while you are not connected to the internet." icon="fal fa-wifi-slash" />
      </v-flex>
      <v-flex xs12 sm6 md3>
        <HighLightPoint title="Installable" color="green" description="Install the apps you want to use simply on your homescreen." icon="fal fa-wifi-slash" />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import HighLightPoint from "./HighLightPoint";

export default{
  name: "Presentation",
  components:{
    HighLightPoint
  }
}

</script>
<style scoped>
h2 {
  margin-bottom: 40px;
  text-align: center;
}
</style>
