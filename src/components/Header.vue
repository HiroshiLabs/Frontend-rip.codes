<template>
  <div class="text-center my-3">
    <div class="d-flex justify-content-center">
      <HeaderLink to="/" exact>Home</HeaderLink>
      <HeaderLink to="/login" exact>Login</HeaderLink>
      <HeaderLink to="/signup" exact>Signup</HeaderLink>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeaderLink from './HeaderLink.vue'
export default defineComponent({
  components: { HeaderLink }
})
</script>
