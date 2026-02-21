<template>
  <v-card class="my-3" density="compact" elevation="0">
    <v-card-title class="font-weight-bold text-secondary">
      /{{ command.command }}
    </v-card-title>
    <v-card-text>{{ command.description }}</v-card-text>
    <v-expansion-panels v-if="command.examples" flat>
      <v-expansion-panel elevation="0" static title="Example(s)">
        <v-expansion-panel-text>
          <v-list>
            <v-list-item v-for="exp in command.examples" :key="exp.argument">
              /{{ command.command }} {{ exp.argument }} - {{ exp.description }}
            </v-list-item>
          </v-list>
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
