import announcements from '~/assets/json/announcements.json'

export const state = () => ({
  offices: [
    {
      id: 0,
      address: '15 Hyde Park Place',
    },
    {
      id: 1,
      address: '45 Marylebone Rd',
    },
    {
      id: 2,
      address: '3 London Bridge Street',
    },
  ],
  announcements,
})
