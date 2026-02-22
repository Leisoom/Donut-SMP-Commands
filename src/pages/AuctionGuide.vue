<template>
  <v-container>
    <v-navigation-drawer>
      <v-list>
        <v-list-item density="compact" href="#items">Items</v-list-item>
        <v-list-item density="compact" href="#enchantments">Enchantments</v-list-item>
      </v-list>
    </v-navigation-drawer>
    <h3 id="items" class="section">Items</h3>
    <v-table id="items" density="compact">
      <thead>
        <tr>
          <th class="text-left">
            Short Hand
          </th>
          <th class="text-left">
            Items
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in auctionCommands"
          :key="item.shortHand"
        >
          <td>{{ item.shortHand }}</td>
          <td>{{ item.description }}</td>
        </tr>
      </tbody>
    </v-table>
    <h3 id="enchantments" class="mt-4 section">Enchantments</h3>
    <v-table density="compact">
      <thead>
        <tr>
          <th class="text-left">
            Short Hand
          </th>
          <th class="text-left">
            Enchantment
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in enchantmentCommands"
          :key="item.shortHand"
        >
          <td>{{ item.shortHand }}</td>
          <td>{{ item.description }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup lang="ts">
  import type { AuctionCommand } from '@/types/auctionCommand'
  import auctionShorthand from '@/assets/auctionCommands.json'
  import enchantmentShorthand from '@/assets/enchantmentCommands.json'

  const auctionCommands = auctionShorthand as AuctionCommand[]
  const enchantmentCommands = enchantmentShorthand as AuctionCommand[]
</script>

<style lang="scss" scoped>
.section {
  scroll-margin-top: 80px;
}</style>
