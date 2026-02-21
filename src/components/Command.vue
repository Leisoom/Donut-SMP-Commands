<template>
  <v-card class="my-3">
    <v-card-title class="font-weight-bold text-secondary">
      /{{ command.command }}
    </v-card-title>
    <v-card-text>{{ command.description }}</v-card-text>
    <v-expansion-panels v-if="command.examples">
      <v-expansion-panel static title="Example(s)">
        <v-expansion-panel-text>
          <v-card-text v-for="exp in command.examples" :key="exp.argument">
            /{{ command.command }} {{ exp.argument }} - {{ exp.description }}
          </v-card-text>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script setup lang="ts">
  import type { Command } from '@/types/command'

  defineProps<{
    command: Command
  }>()

</script>
