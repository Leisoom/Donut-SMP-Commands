<template>
  <v-container>
    <div v-for="(cmds, letter) in groupedCommands" :key="letter">
      <h2>{{ letter.toUpperCase() }}</h2>
      <Command
        v-for="cmd in cmds"
        :key="cmd.command"
        :command="cmd.command"
        :description="cmd.description"
      />
    </div>
  </v-container>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import rawCommands from '@/assets/commands.json'

  interface CommandItem {
    command: string
    description: string
  }

  const commands = rawCommands as CommandItem[]

  const groupedCommands = computed(() => {
    return commands.reduce((acc, cmd) => {
      const letter = cmd.command[0]!.toLowerCase()

      if (!acc[letter]) {
        acc[letter] = []
      }

      acc[letter].push(cmd)

      return acc
    }, {} as Record<string, CommandItem[]>)
  })
</script>
