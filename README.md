# MyWorkspace
Material design front-end for a customer portal web app for business centres.

[View it live on Netlify](https://myworkspace.netlify.com).

## Stack
Name | Type
-- | --
Vue.js | JavaScript front-end framework
Nuxt.js | Vue.js development framework
Vuex | Vue.js state management
Vuetify | Vue.js material design framework
Sass | CSS preprocessor
Pug | HTML preprocessor
Webpack | Module bundler

## Getting Started
Before you start, use the link above to view a live version of the app or follow the [Development Instructions](#development-instructions) to run it on your own machine. After you've got the app running, feel free to explore it by completing any of the following actions:
- Login with the default user credentials that are automatically filled when accessing the login page.
- Use the navbar at the top to navigate around the app.
- View your booking history or click on the New Booking button to make a new one.
- View your invoice history and pay the ones that are due.
- View the centre announcements.
- Click on the avatar at the top right to view more options (i.e. Settings and Logout).

## Development Instructions
```bash
git clone https://github.com/maddyalj/myworkspace.git
cd myworkspace

# install dependencies
npm install

# launch dev server
npm run dev

# generate static version (in /dist)
npm run generate
```

## Note
This repository includes the front-end of the web app only, as the aim of the project is to demo the capabilities of Vue.js. It shouldn't be used in production without connecting it to a backend with a persistent database storage and secure authentication.
