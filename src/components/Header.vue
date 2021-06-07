<template>
  <div class="text-center my-3">
    <h4>Rip.codes</h4>
    <div class="d-flex justify-content-center">
      <HeaderLink to="/" exact>Home</HeaderLink>
      <Header-link to="/login" exact> Login</Header-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeaderLink from "./HeaderLink.vue";
export default defineComponent({
  components: { HeaderLink },
});
</script>