<template>
  <v-app>
    <v-app-bar>
      <v-btn to="/">Home</v-btn>

      <v-btn to="/commands">Commands</v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  //
</script>
