<template>
  <v-container>
    <v-navigation-drawer permanent>
      <v-list>
        <v-list-item v-for="cmd in rawCommands" :key="cmd.command" class="font-weight-bold text-secondary" :href="'#' + cmd.command">
          {{ cmd.command }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <div v-for="(cmds, letter) in groupedCommands" :key="letter">
      <h2>{{ letter.toUpperCase() }}</h2>
      <Command
        v-for="cmd in cmds"
        :id="cmd.command"
        :key="cmd.command"
        class="command-section"
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
.command-section {
  scroll-margin-top: 80px;
}</style>
