<template>
  <div>
    <section>
      <h2>{{ $t("apps_built_for_the_web") }}</h2>
      <v-layout wrap row class="justify-center">
        <v-flex xs12 sm6 md3>
          <HighLightPoint title="Browser" color="#09193C" description="Thanks to the power of progressive web apps, you can use all the apps in your browser." icon="fal fa-globe" />
        </v-flex>
        <v-flex xs12 sm6 md3>
          <HighLightPoint title="Offline" color="#1B305A" description="All the apps can also be partly used offline. This allows it, to continue using the app, while you are not connected to the internet." icon="fal fa-wifi-slash" />
        </v-flex>
        <v-flex xs12 sm6 md3>
          <HighLightPoint title="Installable" color="#304571" description="Install the apps you want to use simply on your homescreen." icon="fal fa-download" />
        </v-flex>
      </v-layout>
    </section>
    <section>
      <h2>{{ $t("apps_built_for_the_assistant") }}</h2>
      <v-card class="not_wide">
        <v-layout wrap row class="justify-center">
          <v-flex md12 lg5 style="text-align:center;">
            <img src="../../assets/img/works_with_the_google_assistant.png" width="400" alt="Works with the Google Assistant">
          </v-flex>
          <v-flex md12 lg7>
            <div class="text-card">
              <p style="margin-top:25px;">{{ $t("assistant_description") }}</p>
            </div>
          </v-flex>
        </v-layout>
      </v-card>
    </section>
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
section {
  margin-bottom: 100px;
}
.text-card{
  color: #7b7e7f;
  font-size: 20px;
  padding: 15px;
  margin-top: 10px;
}
@media (min-width:801px) {
  .v-card.not_wide{
    margin-left: 100px;
    margin-right: 100px;
  }
}
@media (min-width:1901px) {
  .v-card.not_wide{
    margin-left: 200px;
    margin-right: 200px;
  }
}
</style>
