<template>
  <a :href="link" target="_blank">
    <div class="round_link">
      <v-icon v-html="icon"></v-icon>
    </div>
  </a>
</template>
<script>
export default {
  name: "RoundLink",
  props: {
    name: {
      type: String
    },
    icon: {
      type: String,
      default: "fal fa-globe"
    },
    link: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
.round_link{
  border-radius: 20px;
  border: 1px solid white;
  width: 40px;
  height: 40px;
  font-size: 25px;
  color: white;
  text-align: center;
  transition: all 0.3s;
}
.round_link > i {
  font-size: 20px !important;
  color: white;
}
.round_link:hover{
  background-color: white;
  color: #232323;
}
</style>
