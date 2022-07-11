<template>
  <v-col cols="12" sm="6" md="4">
    <v-hover v-slot="{ hover }">
      <v-card :class="{ 'on-hover': hover }" :elevation="hover ? 8 : 4">
        <v-img :src="product.image" max-height="220"></v-img>
        <v-card-title>{{ product.name }}</v-card-title>
        <v-card-text>{{ product.description }}</v-card-text>
        <v-card-subtitle>${{ product.price }}</v-card-subtitle>
      </v-card>
    </v-hover>
  </v-col>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.v-card {
  transition: opacity 0.4s ease-in-out;
}
.v-card:not(.on-hover) {
  opacity: 0.8;
}
</style>
