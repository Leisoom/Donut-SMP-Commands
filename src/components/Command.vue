<template>
  <v-card class="mb-2" density="compact" elevation="0">
    <v-expansion-panels flat>
      <v-expansion-panel elevation="0">
        <v-expansion-panel-title v-if="hasExamples" static>
          <span>
            <b class="text-secondary code mr-2">/{{ command.command }}</b>  {{ command.description }}
          </span>
        </v-expansion-panel-title>
        <div
          v-else
          class="v-expansion-panel-title expansion"
        >
          <span>
            <b class="text-secondary code mr-2">/{{ command.command }}</b>  {{ command.description }}
          </span>
        </div>
        <v-expansion-panel-text v-if="hasExamples">
          <p
            v-for="exp in command.examples"
            :key="exp.argument"
          >
            <span class="code">/{{ command.command }} {{ exp.argument }}</span> - {{ exp.description }}
          </p>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-card>
</template>

<script setup lang="ts">
  import type { Command } from '@/types/command'
  import { computed } from 'vue'

  const props = defineProps<{
    command: Command
  }>()

  const hasExamples = computed(() => {
    return props.command.examples && props.command.examples.length > 0
  })
</script>
