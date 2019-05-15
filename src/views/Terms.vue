<template>
  <v-container>
    <h2>{{ $t("terms_of_service") }}</h2>
    <TermsGerman v-if="language === 'de'" />
    <TermsEnglish v-if="language === 'en'" />
  </v-container>
</template>
<script>
import TermsGerman from "../components/terms/german";
import TermsEnglish from "../components/terms/english";

export default {
  name: "Terms",
  components: {
    TermsGerman,
    TermsEnglish
  },
  computed: {
    language() {
      return this.$i18n.locale;
    }
  }
}
</script>
