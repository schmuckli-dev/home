<template>
  <footer>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4>
          <a @click="openPrivacyPolicy">{{ $t("privacy_poliy") }}</a>
          <br />
          <a @click="openTermsOfService">{{ $t("terms_of_service") }}</a>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <RoundLink name="Github" icon="fab fa-github" link="https://www.github.com/schmuckli-dev" />
        </v-flex>
        <v-flex xs12 sm6 md4>
          &copy; {{ year }} by schmuckli.dev
        </v-flex>
      </v-layout>
    </v-container>
  </footer>
</template>
<script>
import RoundLink from "./RoundLink";

export default {
  name: "Footer",
  methods: {
    openPrivacyPolicy(){
      this.$router.replace("privacy");
    },
    openTermsOfService(){
      this.$router.replace("terms");
    }
  },
  computed: {
    year(){
      return (new Date()).getFullYear();
    }
  },
  components: {
    RoundLink
  }
}
</script>
