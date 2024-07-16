<template>
  <div class="product-basket__list">
    <div v-for="product in products" :key="product.id" class="product-basket__item">
      <h5 class="product-basket__name">Name: {{ product.name }}</h5>
      <p class="product-basket__price">Price: {{ product.price }}</p>
      <label>
        <input type="number" name="basket" v-model.lazy="product.quantity" />
      </label>
      <p class="product-basket__price">{{ product.price * product.quantity }}</p>
      <button @click="showDesc(product.id)">Show description</button>
      <p v-if="show.includes(product.id)">{{ product.description }}</p>
    </div>
    <p class="product-basket__total">Total: {{ total }}</p>
  </div>
</template>

<script>
export default {
  name: 'BasketComp',
  data() {
    return {
      products: [
        { id: 1, name: 'Product A', price: 100, quantity: 2, description: 'desc a' },
        { id: 2, name: 'Product B', price: 200, quantity: 1, description: 'desc b' },
        { id: 3, name: 'Product C', price: 300, quantity: 3, description: 'desc c' }
      ],
      show: []
    }
  },
  methods: {
    showDesc(id) {
      this.show = this.show.includes(id) ? this.show.filter(i => i !== id) : [...this.show, id]
    }
  },
  computed: {
    total() {
      return this.products.reduce((total, product) => total + product.price * product.quantity, 0)
    }
  }
}
</script>

<style scoped lang="scss">
.product-basket {
  &__list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  &__item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background-color: #f8f9fa;
    padding: 1rem;
  }
  &__name {
    font-weight: bold;
  }
  &__price {
    font-style: italic;
  }
  &__quantity {
    margin-right: 1rem;
  }
  &__total {
    font-weight: bold;
  }
}
</style>
