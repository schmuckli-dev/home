<template>
  <a :href="url" target="_blank" class="outer_card">
    <v-slide-y-transition>
        <v-card v-ripple :style="card_style" v-show="show">
          <div :style="image_style">
          </div>
          <span class="app_name">{{ name }}</span>
        </v-card>
    </v-slide-y-transition>
  </a>
</template>
<script>
export default {
  name: "AppLink",
  props: {
    index: Number,
    name: String,
    url: String,
    app_icon: String,
    color: String
  },
  data(){
    return {
      show: true
    }
  },
  computed: {
    card_style(){
      return "background:" + this.color + ";width:100%;height:200px;border-radius:12px;text-align:center;";
    },
    image_style(){
      return "background-image:url(" + this.app_icon + ");background-size:150px 150px;height:150px;width:150px;margin-left:auto;margin-right:auto;";
    }
  },
  mounted(){
    //Fade animation effect on load
    /*var global_this = this;
    setTimeout(function(){
      global_this.show = true;
    }, 200 * (this.index + 1));*/
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
