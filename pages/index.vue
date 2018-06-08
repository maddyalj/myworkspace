<template lang="pug">
  div
    v-btn.right(color='primary') #[v-icon.mr-1 add] New Booking
    h1 Bookings
    v-data-iterator(:items='sortedBookings')
      v-card.mt-3(slot='item' slot-scope='props')
        .pa-3
          img(:src='`img/offices/${getBookingOffice(props.item).id}.jpg`' width='130')
        .pa-3
          .headline {{ getBookingOffice(props.item).address }}
          div.grey--text {{ props.item.guestCount }} guests
          p {{ formatBookingTitle(props.item) }}
          v-btn.ml-0(color='primary') Book Again
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState('centre', ['offices']),
      ...mapState('customer', ['bookings']),
      sortedBookings() {
        return this.bookings.slice().sort(this.sortByDate)
      },
    },
    head: { title: 'Bookings' },
    methods: {
      sortByDate(a, b) {
        return new Date(b.date) - new Date(a.date)
      },
      getBookingOffice(booking) {
        return this.offices[booking.officeId]
      },
      formatBookingTitle(booking) {
        return `${booking.date.substr(8, 2)}/${booking.date.substr(5, 2)} ${booking.startTime} - ${booking.endTime}`
      },
    },
  }
</script>

<style lang='sass' scoped>
  /deep/ .card
    display: flex
    align-items: center

  img
    display: block
</style>
