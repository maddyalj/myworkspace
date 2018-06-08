<template lang="pug">
  v-dialog(v-model='display' max-width='500px' persistent)
    v-card
      v-card-title.primary.white--text.headline New Booking
      v-card-text
        v-layout(wrap)
          v-flex(xs12)
            v-select(:items='offices' item-value='id' item-text='address' v-model='newBooking.officeId' label='Office Address' prepend-icon='business')
          v-flex(xs12)
            v-menu(ref='datePickerMenu' :close-on-content-click='false' offset-y full-width max-width='290px')
              v-text-field(slot='activator' v-model='newBooking.date' label='Date' prepend-icon='event' readonly)
              v-date-picker(v-model='newBooking.date' @input='$refs.datePickerMenu.save()' no-title :min='todayDate' first-day-of-week='1')
          v-flex(xs6)
            v-menu(ref='startTimePickerMenu' :close-on-content-click='false' offset-y full-width max-width='290px')
              v-text-field(slot='activator' v-model='newBooking.startTime' label='Start Time' prepend-icon='access_time' readonly)
              v-time-picker(v-model='newBooking.startTime' @change='$refs.startTimePickerMenu.save()' format='24hr' no-title min='9:00' max='17:00')
          v-flex.pl-3(xs6)
            v-menu(ref='endTimePickerMenu' :close-on-content-click='false' offset-y full-width max-width='290px')
              v-text-field(slot='activator' v-model='newBooking.endTime' label='End Time' readonly)
              v-time-picker(v-model='newBooking.endTime' @change='$refs.endTimePickerMenu.save()' format='24hr' no-title :min='newBooking.startTime' max='18:00')
          v-flex(xs9)
            v-slider(v-model='newBooking.guestCount' label='Guest Count' :min='1')
          v-flex(xs3)
            v-text-field(v-model='newBooking.guestCount' type='number')
      v-card-actions
        v-spacer
        v-btn(@click='clickCancel') Cancel
        v-btn(@click='clickSave' color='primary') Save
</template>

<script>
  import { mapState, mapActions } from 'vuex'

  const defaultNewBooking = {
    guestCount: 1,
  }

  const tomorrowDate = new Date()
  tomorrowDate.setDate(tomorrowDate.getDate() + 1)

  export default {
    props: {
      display: {
        type: Boolean,
        default: true,
      },
      newBooking: {
        type: Object,
        default: () => defaultNewBooking,
      },
    },
    data: () => ({
      todayDate: tomorrowDate.toISOString().slice(0, 10),
    }),
    computed: mapState('centre', ['offices']),
    created() {
      this.resetNewBooking()
    },
    methods: {
      ...mapActions('customer', ['commitNewBooking']),
      clickSave() {
        this.commitNewBooking(this.newBooking)
        this.$emit('update:display', false)
        this.resetNewBooking()
      },
      clickCancel() {
        this.$emit('update:display', false)
        this.resetNewBooking()
      },
      resetNewBooking() {
        const newBooking = Object.assign({}, defaultNewBooking)
        this.$emit('update:newBooking', newBooking)
      },
    },
  }
</script>
