<template>
  <v-container>
    <Presentation />
    <AppGallery />
  </v-container>
</template>
<script>
import AppGallery from "../components/presentation/AppGallery";
import Presentation from "../components/presentation/Presentation";

export default {
  name: "Home",
  components: {
    AppGallery,
    Presentation
  },
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
