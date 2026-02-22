<template>
  <v-container>
    <v-navigation-drawer>
      <v-list>
        <v-list-item class="font-weight-bold">Commands</v-list-item>
        <v-list-item v-for="cmd in rawCommands" :key="cmd.command" density="compact" :href="'#' + cmd.command">
          {{ cmd.command }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div v-for="(cmds, letter) in groupedCommands" :key="letter" class="mb-6">
      <h3>{{ letter.toUpperCase() }}</h3>
      <Command
        v-for="cmd in cmds"
        :id="cmd.command"
        :key="cmd.command"
        class="section"
        :command="cmd"
      />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
  import type { Command } from '@/types/command.ts'
  import { computed } from 'vue'
  import rawCommands from '@/assets/commands.json'

  const commands = rawCommands as Command[]

  const groupedCommands = computed(() => {
    return commands.reduce((acc, cmd) => {
      const letter = cmd.command[0]!.toLowerCase()

      if (!acc[letter]) {
        acc[letter] = []
      }

      acc[letter].push(cmd)

      return acc
    }, {} as Record<string, Command[]>)
  })
</script>

<style lang="scss" scoped>
.section {
  scroll-margin-top: 80px;
}</style>
