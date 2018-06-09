import bookings from '~/assets/json/bookings.json'
import invoices from '~/assets/json/invoices.json'

export const state = () => ({
  bookings,
  invoices,
})

export const getters = {
  getMaxId: ({ bookings }) => Math.max(...bookings.map(b => b.id)),
}

export const mutations = {
  ADD_BOOKING({ bookings }, booking) {
    bookings.push(booking)
  },
}

export const actions = {
  commitNewBooking({ commit, getters }, booking) {
    booking.id = getters.getMaxId + 1
    commit('ADD_BOOKING', booking)
  },
}
