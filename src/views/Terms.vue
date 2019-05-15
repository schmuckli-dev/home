<template>
  <v-container>
    <h2>Terms of service</h2>
    <TermsGerman />
    <TermsEnglish />
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
  }
}
</script>
