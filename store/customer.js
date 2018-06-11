import Vue from 'vue'
import bookings from '~/assets/json/bookings.json'
import invoices from '~/assets/json/invoices.json'

export const state = () => ({
  account: {
    email: 'chandler.bing@example.com',
    password: 'sarc@stic_j0kes',
    name: 'Chandler Bing',
    shouldStayLoggedIn: true,
  },
  auth: false,
  bookings,
  invoices,
})

export const getters = {
  getMaxBookingId: ({ bookings }) => Math.max(...bookings.map(b => b.id)),
}

export const mutations = {
  UPDATE_AUTH(state, value) {
    state.auth = value
  },
  UPDATE_ACCOUNT(state, newAccount) {
    Vue.set(state, 'account', newAccount)
  },
  ADD_BOOKING({ bookings }, booking) {
    bookings.push(booking)
  },
  UPDATE_INVOICE({ invoices }, { index, invoice }) {
    Vue.set(invoices, index, invoice)
  },
}

export const actions = {
  loginAccount({ state, commit }, account) {
    const isEmailInvalid = state.account.email !== account.email
    const isPasswordInvalid = state.account.password !== account.password
    if (isEmailInvalid || isPasswordInvalid) {
      throw 'Invalid user credentials'
    }
    commit('UPDATE_AUTH', true)
  },
  logoutAccount({ commit }) {
    commit('UPDATE_AUTH', false)
  },
  updateAccountSettings({ commit }, settings) {
    const newAccount = Object.assign({}, state.account, settings)
    commit('UPDATE_ACCOUNT', newAccount)
  },
  commitNewBooking({ commit, getters }, booking) {
    booking.id = getters.getMaxBookingId + 1
    commit('ADD_BOOKING', booking)
  },
  makeInvoicePaid({ state, commit }, id) {
    const index = state.invoices.findIndex(i => i.id === id)
    const invoice = { ...state.invoices[index] }
    invoice.isPaid = true
    commit('UPDATE_INVOICE', { index, invoice })
  },
}
