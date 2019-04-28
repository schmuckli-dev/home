<template>
  <a :href="url" target="_blank" class="outer_card">
    <v-card v-ripple :style="card_style">
      <div :style="image_style">
      </div>
      <span class="app_name">{{ name }}</span>
    </v-card>
  </a>
</template>
<script>
export default {
  name: "AppLink",
  props: {
    name: String,
    url: String,
    app_icon: String,
    color: String
  },
  computed: {
    card_style(){
      return "background:" + this.color + ";width:100%;height:200px;border-radius:12px;text-align:center;";
    },
    image_style(){
      return "background-image:url(" + this.app_icon + ");background-size:150px 150px;height:150px;width:150px;margin-left:auto;margin-right:auto;";
    }
  }
}
</script>
<style>
.outer_card{
  text-decoration: none;
}
.app_name{
  font-size: 20px;
  text-decoration: none;
  color:white;
}
</style>
