<template lang="pug">
  div
    v-btn.right(@click.native.stop='clickNewBooking' color='primary') #[v-icon.mr-1 add] New Booking
    h1.mb-3 Bookings
    v-data-iterator(:items='sortedBookings')
      v-card.mb-3(slot='item' slot-scope='props')
        .office-image.pa-3
          img(:src='`img/offices/${getBookingOffice(props.item).id}.jpg`' width='130')
        .pa-3
          .headline {{ getBookingOffice(props.item).address }}
          .grey--text {{ formatBookingDateAndTimes(props.item) }}
          .mb-2 {{ props.item.guestCount }} guests
          v-btn.ml-0(@click='clickBookAgain(props.item)' color='primary') Book Again
    the-new-booking-dialog(v-bind.sync='dialogData')
</template>

<script>
  import theNewBookingDialog from '~/components/the-new-booking-dialog.vue'
  import date from '~/assets/js/mixins/date.js'

  import { mapState } from 'vuex'

  export default {
    components: { theNewBookingDialog },
    mixins: [date],
    data: () => ({
      dialogData: {
        display: false,
        newBooking: {},
      },
    }),
    computed: {
      ...mapState('centre', ['offices']),
      ...mapState('customer', ['bookings']),
      sortedBookings() {
        return this.bookings.slice().sort(this.$_date_sortDescendingly)
      },
    },
    head: { title: 'Bookings' },
    methods: {
      openNewBookingDialog() {
        this.dialogData.display = true
      },
      clickNewBooking() {
        this.openNewBookingDialog()
      },
      getBookingOffice(booking) {
        return this.offices[booking.officeId]
      },
      formatBookingDateAndTimes(booking) {
        return `${this.$_date_format(booking.date)} ${booking.startTime} - ${booking.endTime}`
      },
      clickBookAgain({ id, date, ...newBooking }) {
        this.dialogData.newBooking = newBooking
        this.openNewBookingDialog()
      },
    },
  }
</script>

<style lang='sass' scoped>
  /deep/ .card
    display: flex
    align-items: center
    @media only screen and (max-width: 490px)
      display: block
      text-align: center

  img
    display: block
    margin: auto

</style>
