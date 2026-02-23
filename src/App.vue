<template>
  <v-app>
    <v-app-bar density="compact" elevation="0">
      <v-app-bar-title><a class="text-decoration-none font-weight-bold text-secondary" href="/">Donut Commands</a></v-app-bar-title>
      <v-btn
        class="text-body-1"
        :ripple="false"
        to="/AuctionGuide"
        variant="plain"
      >
        Auction Guide
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
