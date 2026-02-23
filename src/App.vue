<template>
  <v-app>
    <v-app-bar density="compact" elevation="0">
      <v-app-bar-title><router-link class="text-decoration-none font-weight-bold text-secondary" to="/">Donut Commands</router-link></v-app-bar-title>
      <router-link
        class="text-body-1"
        :ripple="false"
        to="/AuctionGuide"
        variant="plain"
      >
        Auction Guide
      </router-link>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
