<template>
  <footer>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3>
          <div class="footer_container">
            <span class="footer_title">{{ $t("information") }}</span>
            <div class="footer_content">
              <a @click="openPrivacyPolicy">{{ $t("privacy_poliy") }}</a>
              <br />
              <a @click="openTermsOfService">{{ $t("terms_of_service") }}</a>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <div class="footer_container">
            <span class="footer_title">{{ $t("links") }}</span>
            <div class="footer_content">
              <RoundLink name="Github" icon="fab fa-github" link="https://www.github.com/schmuckli-dev" />
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <div class="footer_container">
            <span class="footer_title">{{ $t("license") }}</span>
            <div class="footer_content">
              <p>{{ year }} &copy; by schmuckli.dev</p>
              <p>{{ $t("license_information") }}</p>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <div class="footer_container">
            <span class="footer_title">{{ $t("language") }}</span>
            <div class="footer_content">
              <v-select
                :items="langs"
                dark
                v-model="$i18n.locale"
              ></v-select>
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </footer>
</template>
<script>
import RoundLink from "./RoundLink";
import cookies from "js-cookie";

export default {
  name: "Footer",
  methods: {
    openPrivacyPolicy(){
      this.$router.replace("privacy");
    },
    openTermsOfService(){
      this.$router.replace("terms");
    },
    saveLanguageSelection(){
      cookies.set("lang", this.$i18n.locale, { expires: 365 * 10 });
    }
  },
  computed: {
    year(){
      return (new Date()).getFullYear();
    }
  },
  data(){
    return {
      langs: [
        {text: 'English', value: 'en'},
        {text: 'Deutsch', value: 'de'}
      ]
    }
  },
  components: {
    RoundLink
  }
}
</script>
<style>
@import "./../../assets/css/footer.css";
</style>
