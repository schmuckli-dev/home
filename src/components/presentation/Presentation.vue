<template>
  <div>
    <section>
      <h2>{{ $t("apps_built_for_you") }}</h2>
      <v-layout wrap row class="justify-center">
        <v-flex xs12 sm6 md3>
          <HighLightPoint :title="$t('simple')" color="#09193C" :description="$t('simple_description')" icon="fal fa-feather" />
        </v-flex>
        <v-flex xs12 sm6 md3>
          <HighLightPoint :title="$t('availability')" color="#1B305A" :description="$t('availability_description')" icon="fal fa-phone-laptop" />
        </v-flex>
        <v-flex xs12 sm6 md3>
          <HighLightPoint :title="$t('privacy')" color="#304571" :description="$t('privacy_description')" icon="fal fa-lock" />
        </v-flex>
      </v-layout>
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
