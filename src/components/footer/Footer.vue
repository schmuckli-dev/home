<template>
  <footer>
    <v-container>
      <v-layout row wrap>
        <v-flex sm6>
          <a @click="openPrivacyPolicy">{{ $t("privacy_poliy") }}</a>
          <br />
          <a @click="openTermsOfService">{{ $t("terms_of_service") }}</a>
        </v-flex>
      </v-layout>
    </v-container>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  methods: {
    openPrivacyPolicy(){
      this.$router.replace("privacy");
    },
    openTermsOfService(){
      this.$router.replace("terms");
    }
  }
}
</script>
