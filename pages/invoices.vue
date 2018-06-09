<template lang="pug">
  div
    .right
      v-text-field(v-model='search' append-icon='search' label='Search...' single-line hide-details)
    h1.mb-3 Invoices
    v-data-table(:headers='headers' :items='invoices' :search='search' :rows-per-page-items='rowsPerPagesItems' :pagination.sync='pagination')
      template(slot='items' slot-scope='props')
        tr(:class='`${getInvoiceColor(props.item)}--text`')
          td {{ props.item.id }}
          td {{ props.item.amount.toFixed(2) }}
          td {{ $_date_format(props.item.issueDate) }}
          td {{ $_date_format(props.item.dueDate) }}
          td {{ getInvoiceStatus(props.item) }}
          td
            v-btn(@click='clickMakePayment(props.item)' :color='getInvoiceColor(props.item)' flat :disabled='props.item.isPaid') Make Payment
    the-make-payment-dialog(v-bind.sync='dialogData')
</template>

<script>
  import { mapState } from 'vuex'
  import theMakePaymentDialog from '~/components/the-make-payment-dialog.vue'
  import date from '~/assets/js/mixins/date.js'

  const today = new Date()

  export default {
    components: { theMakePaymentDialog },
    mixins: [date],
    data: () => ({
      search: '',
      headers: [
        { text: 'Invoice Number', value: 'id' },
        { text: 'Amount (£)', value: 'amount' },
        { text: 'Issue Date', value: 'issueDate' },
        { text: 'Due Date', value: 'dueDate' },
        { text: 'Status', value: 'isPaid' },
        { value: 'id', sortable: false },
      ],
      rowsPerPagesItems:[
        10,
        25,
        { 'text': 'All', 'value': -1 }
      ],
      pagination: { descending: true },
      dialogData: {
        display: false,
        invoice: {},
      },
    }),
    computed: mapState('customer', ['invoices']),
    head: { title: 'FAQ' },
    methods: {
      getInvoiceStatus(invoice) {
        if (invoice.isPaid) return 'Paid'
        else if (new Date(invoice.dueDate) <= today) return 'Overdue'
        return 'New'
      },
      getInvoiceColor(invoice) {
        const status = this.getInvoiceStatus(invoice)
        switch (status) {
          case 'New': return 'primary'
          case 'Overdue': return 'error'
        }
        return null
      },
      clickMakePayment(invoice) {
        this.dialogData = {
          display: true,
          invoice,
        }
      },
    },
  }
</script>
