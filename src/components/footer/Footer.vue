<template>
  <footer>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4>
          <div class="footer_container">
            <span class="footer_title">{{ $t("information") }}</span>
            <div class="footer_content">
              <a @click="openPrivacyPolicy">{{ $t("privacy_poliy") }}</a>
              <br />
              <a @click="openTermsOfService">{{ $t("terms_of_service") }}</a>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <div class="footer_container">
            <span class="footer_title">{{ $t("links") }}</span>
            <div class="footer_content">
              <RoundLink name="Github" icon="fab fa-github" link="https://www.github.com/schmuckli-dev" />
            </div>
            <div class="footer_content">
              <select v-model="$i18n.locale" @change="saveLanguageSelection">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
              </select>
            </div>
          </div>
        </v-flex>
        <v-flex xs12 sm6 md4>
          <div class="footer_container">
            <span class="footer_title">{{ $t("license") }}</span>
            <div class="footer_content">
              <p>{{ year }} &copy; by schmuckli.dev</p>
              <p>{{ $t("license_information") }}</p>
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
      langs: ['en', 'de']
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
