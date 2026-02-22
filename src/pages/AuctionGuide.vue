<template>
  <v-container>
    <v-navigation-drawer>
      <v-list>
        <v-list-item
          class="code text-body-2"
          density="compact"
          href="#items"
          min-height="10"
          :ripple="false"
        >Items</v-list-item>
        <v-list-item
          class="code text-body-2"
          density="compact"
          href="#enchantments"
          min-height="10"
          :ripple="false"
        >Enchantments</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <h3 id="items" class="section">Items</h3>
    <v-table id="items" density="compact">
      <thead>
        <tr>
          <th style="width: 190px">
            Argument
          </th>
          <th>
            Item(s)
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in auctionCommands"
          :key="item.argument"
        >
          <td class="code">{{ item.argument }}</td>
          <td>{{ item.description }}</td>
        </tr>
      </tbody>
    </v-table>
    <h3 id="enchantments" class="mt-4 section">Enchantments</h3>
    <v-table density="compact">
      <thead>
        <tr>
          <th style="width: 190px">
            Argument
          </th>
          <th>
            Enchantment
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in enchantmentCommands"
          :key="item.argument"
        >
          <td class="code">{{ item.argument }}</td>
          <td>{{ item.description }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
  import type { CommandExample } from '@/types/commandExample'
  import auctionShorthand from '@/assets/auctionCommands.json'
  import enchantmentShorthand from '@/assets/enchantmentCommands.json'

  const auctionCommands = auctionShorthand as CommandExample[]
  const enchantmentCommands = enchantmentShorthand as CommandExample[]
</script>

<style lang="scss" scoped>
.section {
  scroll-margin-top: 80px;
}</style>
