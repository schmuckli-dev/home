<template>
  <div class="highlightpoint">
    <div class="round_icon" :style="icon_style">
      <v-icon>{{ icon }}</v-icon>
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>
<script>
  export default{
    name: "HighLightPoint",
    props: {
      title: String,
      icon: {
        type: String,
        default: "menu",
        required: false
      },
      description: String,
      color: String
    },
    computed: {
      icon_style(){
        return "background:" + this.color;
      }
    }
  }
</script>
<style scoped>
.round_icon{
  background: black;
  border-radius: 50px;
  width: 100px;
  height: 100px;
  text-align: center;
  padding-top: 25px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 30px;
}
.round_icon > i {
  color: white;
  font-size: 50px;
}
h3{
  text-align: center;
  font-size: 20px;
}
.highlightpoint{
  text-align: center;
  padding: 15px;
}
</style>
