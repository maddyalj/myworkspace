<template lang="pug">
  v-footer
    v-flex(class='text-xs-center') © {{ year }}. All rights reserved.
</template>

<script>
  export default {
    data: () => ({
      year: new Date().getFullYear(),
    }),
  }
</script>
