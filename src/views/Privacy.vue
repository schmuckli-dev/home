<template>
  <v-container>
    <h2>{{ $t("privacy_poliy") }}</h2>
    <PrivacyGerman v-if="language === 'de'" />
    <PrivacyEnglish v-if="language === 'en'" />
  </v-container>
</template>
<script>
import { getLanguage } from "./../translation";

import PrivacyGerman from "../components/privacy/german";
import PrivacyEnglish from "../components/privacy/english";

export default {
  components: {
    PrivacyGerman,
    PrivacyEnglish
  },
  computed: {
    language() {
      return this.$i18n.locale;
    }
  }
}
</script>
