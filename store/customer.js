import Vue from 'vue'
import bookings from '~/assets/json/bookings.json'
import invoices from '~/assets/json/invoices.json'

export const state = () => ({
  bookings,
  invoices,
})

export const getters = {
  getMaxBookingId: ({ bookings }) => Math.max(...bookings.map(b => b.id)),
}

export const mutations = {
  ADD_BOOKING({ bookings }, booking) {
    bookings.push(booking)
  },
  UPDATE_INVOICE({ invoices }, { index, invoice }) {
    Vue.set(invoices, index, invoice)
  },
}

export const actions = {
  commitNewBooking({ commit, getters }, booking) {
    booking.id = getters.getMaxBookingId + 1
    commit('ADD_BOOKING', booking)
  },
  makeInvoicePaid({ state, commit, getters }, id) {
    const index = state.invoices.findIndex(i => i.id === id)
    const invoice = Object.assign({}, state.invoices[index])
    invoice.isPaid = true
    commit('UPDATE_INVOICE', { index, invoice })
  },
}
