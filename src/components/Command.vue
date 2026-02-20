<template>
  <v-card class="my-3">
    <v-card-title class="font-weight-bold text-secondary">
      /{{ command }}
    </v-card-title>
    <v-card-text>{{ description }}</v-card-text>

  </v-card>
</template>

<script setup lang="ts">

  defineProps<{
    command: string
    description: string
  }>()

</script>
