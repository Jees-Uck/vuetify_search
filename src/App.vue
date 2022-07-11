<template>
  <v-app>
    <v-app-bar app color="purple darken-4" dark>
      <v-container>
        <v-toolbar-title> Product search </v-toolbar-title>
      </v-container>
    </v-app-bar>
    <v-main>
      <v-container>
        <search-form @search="search($event)" @search-content="searchContent = !searchContent"></search-form>
        <v-row v-if="!searchQuery.length">
          <product-card v-for="product in products" :key="product.id" :product="product"></product-card>
        </v-row>
        <div v-else-if="searchQuery.length > 2">
          <v-row v-if="searchResult.length">
            <product-card v-for="product in searchResult" :key="product.id" :product="product"></product-card>
          </v-row>
          <div v-else>
            <p>Nothing found</p>
          </div>
        </div>
        <v-row v-else>
          <skeleton-loader></skeleton-loader>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue'
import ProductCard from '@/components/ProductCard.vue'
import SkeletonLoader from '@/components/SkeletonLoader.vue'

export default {
  name: 'App',
  components: {
    SkeletonLoader,
    SearchForm,
    ProductCard,
  },
  data() {
    return {
      products: [],
      searchQuery: '',
      searchResult: [],
      searchContent: false,
    }
  },
  methods: {
    setData: function () {
      for (let i = 0; i < 12; i++) {
        let product = {
          id: i,
          name: this.$faker().commerce.productName(),
          description: this.$faker().commerce.productDescription(),
          price: this.$faker().commerce.price(2, 50),
          image: this.$faker().image.technics(272, 200, true),
        }
        this.products.push(product)
      }
    },

    findTerm: function (string, term) {
      return string.toLowerCase().includes(term.toLowerCase())
    },

    search: function (query) {
      this.searchQuery = query
      if (query.length > 2) {
        if (this.searchContent) {
          this.searchResult = this.products.filter((product) => {
            return this.findTerm(product.name, query) || this.findTerm(product.description, query)
          })
        } else {
          this.searchResult = this.products.filter((product) => this.findTerm(product.name, query))
        }
      }
    },
  },
  mounted() {
    this.setData()
  },
}
</script>
