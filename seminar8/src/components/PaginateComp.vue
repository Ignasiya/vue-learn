<template>
  <div>
    <h1>Каталог товаров с пагинацией</h1>
    <ul>
      <li v-for="product in paginatedProducts" :key="product.id">
        {{ product.name }}
      </li>
      <div v-if="totalPages > 1">
        <router-link
          v-for="(pageNumber, index) in totalPages"
          :key="index"
          :to="createPageLink(pageNumber)"
          >{{ pageNumber }}</router-link
        >
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PaginateComp',
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' },
        { id: 6, name: 'Product 6' },
        { id: 7, name: 'Product 7' },
        { id: 8, name: 'Product 8' },
        { id: 9, name: 'Product 9' },
        { id: 10, name: 'Product 10' },
        { id: 11, name: 'Product 11' },
        { id: 12, name: 'Product 12' },
        { id: 13, name: 'Product 13' },
        { id: 14, name: 'Product 14' },
        { id: 15, name: 'Product 15' }
      ],
      itemsPerPage: 5
    }
  },
  computed: {
    paginatedProducts() {
      const pageNumber = this.getCurrentPageNumber()
      const startIndex = (pageNumber - 1) * this.itemsPerPage
      const endIndex = startIndex + this.itemsPerPage
      return this.products.slice(startIndex, endIndex)
    },
    totalPages() {
      return Math.ceil(this.products.length / this.itemsPerPage)
    }
  },
  methods: {
    getCurrentPageNumber() {
      const pageNumberParam = parseInt(this.$route.params.pageNumber)
      return isNaN(pageNumberParam) || pageNumberParam < 1 ? 1 : pageNumberParam
    },
    createPageLink(pageNumber) {
      return `/paginate/${pageNumber}`
    }
  }
}
</script>

<style lang="scss" scoped></style>
