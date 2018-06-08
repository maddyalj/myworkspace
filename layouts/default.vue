<template lang="pug">
  v-app
    the-navbar
    v-content
      v-container
        nuxt
    v-footer
      v-flex(class='text-xs-center') © 2018. All rights reserved.
</template>

<script>
  import TheNavbar from '~/components/the-navbar.vue'

  export default {
    components: { TheNavbar },
  }
</script>
