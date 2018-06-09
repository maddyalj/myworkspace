<template lang="pug">
  v-toolbar(dark color='primary')
    v-toolbar-title.mr-4 #[v-icon.mb-1 business_center] MyWorkspace
    v-toolbar-items
      v-btn(to='/' flat) Bookings
      v-btn(to='/invoices' flat) Invoices
      v-btn(to='/announcements' flat) Announcements
    v-spacer
    v-toolbar-items
      v-menu(offset-y)
        v-btn(flat slot='activator')
          v-avatar(size='36')
            img(src='http://i.pravatar.cc/36?img=53' alt='Display Picture')
          v-icon.ml-2 keyboard_arrow_down
        v-list
          v-list-tile(to='/settings')
            v-icon.mr-3 settings
            v-list-tile-title Settings
          v-list-tile(to='/login')
            v-icon.mr-3 exit_to_app
            v-list-tile-title Logout
</template>

<style lang='sass' scoped>
  /deep/ .toolbar__content
    margin: 0 auto
    @media only screen and (min-width: 960px)
      max-width: 900px
    @media only screen and (min-width: 1264px)
      max-width: 1185px
    @media only screen and (min-width: 1904px)
      max-width: 1785px
    @media only screen and (max-width: 599px)
      padding: 24px
</style>
