<template>
  <v-app>
    <v-app-bar density="compact" elevation="0">
      <v-app-bar-title class="text-secondary font-weight-bold cursor-pointer"><a class="text-decoration-none text-secondary" href="/">Donut Commands</a></v-app-bar-title>
      <v-btn class="text-body-1" href="/">
        Commands
      </v-btn>
      <v-btn class="text-body-1" href="/auctionGuide">
        Auction Guide
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
