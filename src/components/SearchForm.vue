<template>
  <v-row class="py-6">
    <v-col cols="12" sm="4" md="3">
      <v-text-field label="Search product" @input="$emit('search', $event)" color="purple darken-4">
        <v-icon slot="append" color="purple darken-4"> mdi-magnify </v-icon>
      </v-text-field>
    </v-col>
    <v-col cols="12" sm="4" md="3">
      <v-checkbox
        checked="false"
        @change="$emit('search-content', $event)"
        label="Search in description"
        color="purple darken-4"
      ></v-checkbox>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SearchForm',
}
</script>

