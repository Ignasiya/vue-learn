const productcard = {
    props: {
        product: {
            id: {
                type: Number,
                required: true
            },
            title: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            linkBuy: {
                type: String,
                required: true
            },
            linkCard: {
                type: String,
                required: true
            }
        }
    },
    template: `
        <div :data-id="product.id" class="featured__item">
            <a class="featured__cart" :href="product.linkBuy">
                <div class="featured__add">
                    <slot></slot>
                    <p>Add to Cart</p>
                </div>
            </a>
            <a class="featured__content" :href="product.linkCard">
                <img :src="product.image" alt="product">
                <h3 class="featured__title">{{ product.title }}</h3>
                <p class="featured__price">$ {{ product.price }}</p>
            </a>
        </div>
    `
}