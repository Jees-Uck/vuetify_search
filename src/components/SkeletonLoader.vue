<template>
  <v-sheet class="d-flex flex-grow-1">
    <v-col v-for="n in 3" :key="n" cols="12" sm="6" md="4">
      <v-skeleton-loader max-width="400" type="card"></v-skeleton-loader>
    </v-col>
  </v-sheet>
</template>

<script>
export default {
  name: 'SkeletonLoader',
}
</script>

