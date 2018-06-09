<template lang="pug">
  div
    h1.mb-3 Settings
    v-text-field(v-model='account.name' prepend-icon='person' label='Name')
    v-text-field(v-model='account.email' prepend-icon='email' label='Email' type='email')
    v-text-field(v-model='newPassword' prepend-icon='lock' label='New Password' type='password')
    v-text-field(v-model='newPasswordConfirm' prepend-icon='lock' label='Confirm New Password' type='password')
    .right
      v-btn(@click='clickCancel') Cancel
      v-btn(@click='clickSave' color='primary') Save
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data: () => ({
      newPassword: null,
      newPasswordConfirm: null,
    }),
    head: { title: 'Settings' },
    beforeCreate() {
      this.account = { ...this.$store.state.customer.account }
    },
    methods: {
      ...mapActions('customer', ['updateAccountSettings']),
      redirectHome() {
        this.$router.push('/')
      },
      clickSave() {
        this.updateAccountSettings(this.account)
        this.redirectHome()
      },
      clickCancel() {
        this.redirectHome()
      },
    },
  }
</script>
