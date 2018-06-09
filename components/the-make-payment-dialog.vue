<template lang="pug">
  v-dialog(v-model='display' max-width='500px' persistent)
    v-card
      v-card-title.primary.white--text.headline Make Payment
      v-card-text A payment of £{{ invoice.amount }} will be taken from your credit card.
      v-card-actions
        v-spacer
        v-btn(@click='clickCancel') Cancel
        v-btn(@click='clickContinue' color='error') Continue
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    props: {
      display: {
        type: Boolean,
        default: true,
      },
      invoice: {
        type: Object,
        required: true,
      },
    },
    methods: {
      ...mapActions('customer', ['makeInvoicePaid']),
      clickContinue() {
        this.makeInvoicePaid(this.invoice.id)
        this.$emit('update:display', false)
      },
      clickCancel() {
        this.$emit('update:display', false)
      },
    },
  }
</script>
