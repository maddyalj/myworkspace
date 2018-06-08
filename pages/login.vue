<template lang="pug">
  v-card
    v-card-text
      .subheading.text-xs-center Log in to your customer portal
      v-form
        v-text-field(v-model='user.email' prepend-icon='email' label='Email' type='email')
        v-text-field(v-model='user.password' prepend-icon='lock' label='Password' type='password')
        v-checkbox(v-model='user.shouldStayLoggedIn' label='Stay logged in?' hide-details)
        v-btn(to='/' color='primary' block type='submit') Sign in
</template>

<script>
  export default {
    data: () => ({
      user: {
        email: 'chandler.bing@example.com',
        password: 'sarc@stic_j0kes',
        shouldStayLoggedIn: true,
      },
    }),
    head: { title: 'Login' },
    layout: 'public',
  }
</script>
